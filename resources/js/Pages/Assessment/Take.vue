<script setup>

import AbleProLayout from "@/Layouts/AbleProLayout.vue";
import {Head, Link} from "@inertiajs/vue3";
import {computed, onMounted, ref} from "vue";

const props = defineProps({
    assessment: Object,
    questions: Object,
    answer: Object,
    assessmentAnswer: Object,
    attempts: String,
})

let table = ref([]);
let assessment = ref([])

onMounted(() => {
    assessment.value = props.assessment
    table.value = props.questions

})


const canTakeAssessment = computed(() => {
    let publishingDate = new Date(props.assessment.publishing_date);
    let todaysDate = new Date();

    publishingDate = new Date(publishingDate.getFullYear(), publishingDate.getMonth(), publishingDate.getDate());
    todaysDate = new Date(todaysDate.getFullYear(), todaysDate.getMonth(), todaysDate.getDate());

    return publishingDate <= todaysDate && Number(props.assessment.attempts) >= props.attempts;
})
</script>

<template>
    <Head :title="props.assessment.name" />

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
                            <div class="text-h2 font-bold text-uppercase mt-2">{{ props.answer?.correct ?? 0}} / {{ props.questions.length }}</div>
                        </div>
                        <div class="text-center">
                           <div class="text-h6 mt-12">Time length: {{ props.assessment.time_limit }} (minutes)</div>
                           <div class="text-h6">Total Attempts: {{ props.attempts }}</div>
                        </div>
                        <div class="text-center mt-3" v-if="canTakeAssessment">
                            <Link :href="route('assessment.answer', {
                                'assessment_id': assessment.id
                            })">
                                <v-btn>Take exam</v-btn>
                            </Link>
                        </div>
                        <div class="text-center mt-3" v-else>
                            Maximum Total Attempts Reached or Exam is not yet published
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AbleProLayout>

</template>

<style scoped>

</style>
