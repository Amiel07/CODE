<script setup>
import "//unpkg.com/mathlive";
import {onMounted, ref} from 'vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import SelectComponent from "@/Components/SelectComponent.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import TextInput from "@/Components/TextInput.vue";
import {useForm} from "@inertiajs/vue3";
import {useToast} from "vue-toastification";
import AbleProLayout from "@/Layouts/AbleProLayout.vue";
import InputLabel from "@/Components/InputLabel.vue";
import InputError from "@/Components/InputError.vue";
const toast = useToast()

const value = ref('')
const assessment_id = ref(null);
const urlParams = new URLSearchParams(window.location.search)
assessment_id.value = urlParams.get('assessment_id')

const props = defineProps({
    questions: Object
});

const form = useForm({
    assessment_id: props.questions.assessment_id,
    question: props.questions.question,
    formula: props.questions.formula,
    input_variable: props.questions.input_variable,
    output_variable: props.questions.output_variable,
    syntax: props.questions.syntax,
    answer: props.questions.answer,
    a: null,
    b: null,
    c: null,
    d: null,
    upper_value: props.questions.upper_value,
    lower_value: props.questions.lower_value,
});

const formSubmit = () => {
    form.patch(route('question.update', props.questions.id), {
        preserveScroll: true,
        preserveState: false,
        onProgress: () => {
            console.log("form submitting");
        },
        onSuccess: (data) => {
            toast("Record successfully saved", {
                autoClose: 3500,
                type: "success",
                transition: "slide",
                theme: "colored"
            });
        },
        onError: () => {
            toast("There was an error with your action", {
                autoClose: 3500,
                type: "error",
                transition: "slide",
                theme: "colored"
            });
        },
        onFinish: () => {
            // form.reset();

            //     TODO: RESET UPLOAD FORM
            //     resetUploadForms();
        }
    });
};

const handleInput = (evt) => {
    form.formula = evt.target.value
}

onMounted(() => {
    console.log(props.questions.assessment)
})

</script>

<template>
    <AbleProLayout>
        <section>
            <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                <header>
                    <h2 class="text-lg font-medium text-gray-900">
                        Update Question
                    </h2>
                    <p class="mt-1 text-sm text-gray-600">
                        Update Question Information
                    </p>
                </header>
                <v-form @submit.prevent="formSubmit" class="mt-6 space-y-3">
                    <div>
                        <label>Question</label>
                        <ckeditor
                            id="question"
                            class="block w-full"
                            :editor="ClassicEditor"
                            style="height: 420px"
                            v-model="form.question"></ckeditor>
                        <InputError :message="form.errors.question"></InputError>
                    </div>
                    <div v-if="props.questions.assessment.type === 'Multiple Choice'">
                        <label>Question</label>
                        <v-row class="mt-2">
                            <v-col cols="3">
                                <TextInput
                                    id="a"
                                    type="text"
                                    class="block w-full"
                                    v-model="form.a"
                                    :required="true"
                                    label="A"
                                    :error-message="form.errors.a"
                                />
                            </v-col>
                            <v-col cols="3">
                                <TextInput
                                    id="b"
                                    type="text"
                                    class="block w-full"
                                    v-model="form.b"
                                    :required="true"
                                    label="B"
                                    :error-message="form.errors.b"
                                />
                            </v-col>
                            <v-col cols="3">
                                <TextInput
                                    id="c"
                                    type="text"
                                    class="block w-full"
                                    v-model="form.c"
                                    :required="true"
                                    label="C"
                                    :error-message="form.errors.c"
                                />
                            </v-col>
                            <v-col cols="3">
                                <TextInput
                                    id="d"
                                    type="text"
                                    class="block w-full"
                                    v-model="form.d"
                                    :required="true"
                                    label="D"
                                    :error-message="form.errors.d"
                                />
                            </v-col>
                        </v-row>
                    </div>
                    <div>
                        <TextInput
                            id="answer"
                            type="text"
                            class="block w-full"
                            v-model="form.answer"
                            :required="true"
                            label="Answer"
                            :error-message="form.errors.answer"
                        />
                    </div>
                    <div v-if="props.questions.assessment.type  === 'Problem Solving'">
                        <div class="mt-4">
                            <TextInput
                                id="input_variable"
                                type="text"
                                class="block w-full"
                                v-model="form.input_variable"
                                :required="true"
                                label="Input Variable"
                                :error-message="form.errors.input_variable"
                            />
                        </div>
                        <div>
                            <TextInput
                                id="output_variable"
                                type="text"
                                class="block w-full"
                                v-model="form.output_variable"
                                :required="true"
                                label="Output Variable"
                                :error-message="form.errors.output_variable"
                            />
                        </div>
                        <div class="mt-4">
                            <TextInput
                                id="upper_value"
                                type="text"
                                class="block w-full"
                                v-model="form.upper_value"
                                :required="true"
                                label="Highest Number"
                                :error-message="form.errors.upper_value"
                            />
                        </div>
                        <div>
                            <TextInput
                                id="lower_value"
                                type="text"
                                class="block w-full"
                                v-model="form.lower_value"
                                :required="true"
                                label="Lowest Number"
                                :error-message="form.errors.lower_value"
                            />
                        </div>
                        <div class="mt-3">
                            <TextInput
                                id="syntax"
                                type="text"
                                class="block w-full"
                                v-model="form.syntax"
                                :required="true"
                                label="Syntax"
                                :error-message="form.errors.syntax"
                            />
                        </div>
                        <div>
                            <label>Formula</label>
                            <math-field
                                class="block w-full h-25"
                                style="height: 50px !important;"
                                @input="handleInput">
                                {{ props.questions.formula }}
                            </math-field>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <progress v-if="form.progress" :value="form.progress.percentage" max="100" class="w-full">
                            {{ form.progress.percentage }}%
                        </progress>
                    </div>
                    <div class="flex items-center gap-4">
                        <PrimaryButton :disabled="form.processing" class="w-full">Save</PrimaryButton>
                    </div>
                </v-form>
            </div>
        </section>
    </AbleProLayout>

    <!--    <math-field @input="handleInput">{{ value }}</math-field>-->
    <!--    <p>Value: {{ value }}</p>-->
</template>

<style scoped>

</style>
