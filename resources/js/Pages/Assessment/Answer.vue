<script setup>

import AbleProLayout from "@/Layouts/AbleProLayout.vue";
import {Head, useForm} from "@inertiajs/vue3";
import {onMounted, onUnmounted, ref, watch} from "vue";
import TextInput from "@/Components/TextInput.vue";
import * as math from 'mathjs';

const props = defineProps({
    assessment: Object,
    questions: Object,
    answered: Boolean,
    assessmentResult: Object
})

let table = ref([]);
let assessment = ref([])
let answers = ref({})
const form = useForm({
    answers: null,
    assessment: null,
    formula: null,
    replacement: null,
    questionsReplaced: null,
})
let replacements = ref({})
const isLoaded = ref(false);

let randomizeQuestions = ref([])
const randomizeQuestion = (question) => {
    console.log("Randomize");
    // return question.toString().replace(/{{.*?}}/g, (match, p1) =>{
    //     let stringMatch = match.match(/{{(.*?)}}/g).map(s => s.replace(/{{|}}/g,''));
    //     const randomNum = Math.floor(Math.random() * 100).toString();
    //     replacements[stringMatch[0]] = randomNum
    //     return randomNum;
    // });
    let questionReplacements = {};
    let modifiedQuestion = question.question.toString().replace(/{{(.*?)}}|\[\[(.*?)\]\]/g, (match) => {
        let stringMatch = match.replace(/\{\{|\}\}|\[\[|\]\]/g, '');
        let min = Math.ceil(question.lower_value);
        let max = Math.ceil(question.upper_value);
        const randomNum = Math.floor(Math.random() * (max - min + 1) + min).toString();
        questionReplacements[stringMatch] = randomNum;
        return randomNum;
    });

    return { question: modifiedQuestion, replacements: questionReplacements };
}

// props.questions.map((item) => {
//     item.question = randomizeQuestion(item.question); // Assume randomizeQuestion is your function
//
//     return item;
// });

const counter = ref(''); // reactive reference for counter
let intervalID;

let questionsReplaced = ref({})
onMounted(() => {
    table.value = props.questions
    randomizeQuestions.value = props.questions.map(q => {
        let result = randomizeQuestion(q);
        q.question = result.question;
        console.log('result question', result.question);
        questionsReplaced.value[q.id] = result.question
        replacements.value[q.id] = result.replacements;
        return q;
    });


    let timeLimit = props.assessment.time_limit; // in minutes
    let startTime = localStorage.getItem("startTime");
    let endTime = localStorage.getItem("endTime");
    if (!startTime || !endTime) {
        startTime = new Date();
        endTime = new Date(startTime.getTime() + timeLimit*60*1000);
        localStorage.setItem("startTime", startTime);
        localStorage.setItem("endTime", endTime);
    } else {
        startTime = new Date(startTime);
        endTime = new Date(endTime);
    }

    intervalID = setInterval(() => {
        let now = new Date();
        let distance = endTime - now;

        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        counter.value = minutes + "m " + seconds + "s ";

        if (distance < 0) {
            console.log(1);
            localStorage.removeItem("startTime");
            localStorage.removeItem("endTime");

            if (props.assessment.isAutoSubmit === 1) {
                submitAnswer()
            } else {
                alert('times up!');
            }
            clearInterval(intervalID);

        }
    }, 1000);
});

onUnmounted(() => { // cleanup hook when component is unmounted
    clearInterval(intervalID);
});

watch(answers.value, (newValue, oldValue) => {
    console.log(newValue, oldValue)
})

const submitAnswer = async () => {
    console.log(answers.value)
    form.answers = answers.value
    form.assessment = props.assessment;
    form.replacement = replacements.value;
    localStorage.setItem("answer", JSON.stringify(form.answers));
    form.questionsReplaced = questionsReplaced.value;
    form.post(route('assessment.submit-answer'), {
        onFinish: (data) => {
            console.log('finish');
        },
        onSuccess: (data) => {
            console.log(data);
            console.log('success');
        },
        onError: () => {
            alert('error');
        }
    })
}



</script>

<template>
    <Head :title="props.assessment?.name" />

    <AbleProLayout>
        <template v-slot:pageTitle>
            {{ props.assessment?.name }}
        </template>
        <div class="row">
            <div class="col-md-12">
                <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                    <header>
                        <h2 class="text-right">
                            {{ counter }}
                        </h2>
                        <h2 class="text-lg font-medium text-gray-900">
                            {{ props.assessment?.name }}
                        </h2>

                    </header>
                    {{ props.assessment.type }}
                    <div v-if="props.assessment.type == 'Fill in the Blank' ||
                               props.assessment.type == 'True or False' ||
                               props.assessment.type == 'Essay' ||
                               props.assessment.type == 'Matching Type'"
                    >
                        <ol>
                            <li v-for="q in questions">
                                <div v-html="q.question"></div>
                                <ul class="list-unstyled mt-3">
                                    <li>
                                        <TextInput
                                            id="d"
                                            type="text"
                                            class="block w-50"
                                            v-model="answers[q.id]"
                                            :required="true"
                                            label="Answer"
                                        />
                                    </li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                    <div v-else-if="props.assessment.type == 'Multiple Choice'">
                        <ol>
                            <li v-for="q in questions">
                                <div v-html="q.question"></div>
                                <v-radio-group v-model="answers[q.id]" >
                                    <v-radio :value="key" v-for="(value, key) in q.choices">
                                        <div>{{ key }}.</div>
                                        <template v-slot:label>
                                            <div class="text-black">{{ value }}</div>
                                        </template>
                                    </v-radio>
                                </v-radio-group>
                            </li>
                        </ol>
                    </div>
                    <div v-else-if="props.assessment.type == 'Problem Solving'">
                        <ol>
                            <li v-for="q in randomizeQuestions">
                                <div v-html="q.question"></div>
                                <ul class="list-unstyled mt-3">
                                    <li>
                                        <TextInput
                                            id="d"
                                            type="text"
                                            class="block w-50"
                                            v-model="answers[q.id]"
                                            :required="true"
                                            label="Answer"
                                        />
                                    </li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                    <div>
                        <v-btn @click="submitAnswer" class="w-100 block" color="primary">Save Answer</v-btn>
                    </div>
                </div>
            </div>
        </div>
    </AbleProLayout>

</template>

<style scoped>

</style>
