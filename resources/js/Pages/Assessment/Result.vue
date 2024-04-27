<script setup>

import AbleProLayout from "@/Layouts/AbleProLayout.vue";
import {Head, Link} from "@inertiajs/vue3";
import {computed, onMounted, ref} from "vue";
import TextInput from "@/Components/TextInput.vue";

const props = defineProps({
    assessmentResult: Object,
    assessment: Object,
    attempts: String,
    questions: Object,
    studentAnswers: Object
})

let table = ref([]);
let assessment = ref([])
let assessmentResult = ref([])
onMounted(() => {
    assessment.value = props.assessment;
    assessmentResult.value = props.assessmentResult;
})


const canTakeAssessment = computed(() => {
    let publishingDate = new Date(props.assessment.publishing_date);
    let todaysDate = new Date();

    publishingDate = new Date(publishingDate.getFullYear(), publishingDate.getMonth(), publishingDate.getDate());
    todaysDate = new Date(todaysDate.getFullYear(), todaysDate.getMonth(), todaysDate.getDate());

    console.log(publishingDate <= todaysDate)
    console.log(Number(props.assessment.attempts) >= props.attempts)
    console.log(props.assessment.attempts, props.attempts, publishingDate);

    return publishingDate <= todaysDate && Number(props.assessment.attempts) >= props.attempts;
});

const reTake = () => {
    localStorage.removeItem("startTime");
    localStorage.removeItem("endTime");
   location.replace(route('assessment.answer', {
        'assessment_id': props.assessment.id
    }))
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
                        <h2 class="text-lg font-medium text-gray-900">
                            {{ props.assessment?.name }}
                        </h2>
                    </header>
                    <div class="row d-flex justify-content-center align-items-center">
                        <div class="col-md-12 text-center">
                            <div class="text-h5 font-bold text-uppercase">Your score</div>
                            <div class="text-h2 font-bold text-uppercase mt-2">{{ assessmentResult?.correct ?? 0}} / {{ questions?.length }}</div>
                        </div>
                        <div class="text-center">
                            <div class="text-h6 mt-12">Time length {{ props.assessment.time_limit }} (minutes)</div>
                            <div class="text-h6">Number of attempts: {{ props.attempts }}</div>
                        </div>
                        <div class="text-center mt-3">
<!--                            <Link v-if="canTakeAssessment">-->
                                <v-btn color="primary" v-if="canTakeAssessment" @click="reTake" >Re-Take exam</v-btn>
<!--                            </Link>-->
                            <v-btn color="primary" v-else>The maximum number of attempts has been reached / exam is not yet published</v-btn>
                            <Link :href="route('dashboard.index')">
                                <v-btn color="danger" class="text-white ml-3">Exit</v-btn>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" v-if="props.assessment?.isAnswerViewable === 1">
            <div class="col-12 mt-3 pa-4">
                <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                    <header>
                        <h2 class="text-lg font-medium text-gray-900">
                            Assessment Summary
                        </h2>
                    </header>
                    <div class="row d-flex justify-content-center align-items-center pa-4">
                        <ol>
                            <li v-for="(questionText, questionId, index) in studentAnswers.questions[0]" :key="questionId" class="mt-2">
                                <div v-html="questionText"></div>
                                <div><strong>Answer: </strong> {{ studentAnswers.answers[index].answer }}</div>
                                <div><strong>Correct Answer: </strong> {{ studentAnswers.answers[index].correct_answer }}</div>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </AbleProLayout>

</template>

<style scoped>

</style>
