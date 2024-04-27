<script setup>

import AbleProLayout from "@/Layouts/AbleProLayout.vue";
import {Head, Link, useForm} from "@inertiajs/vue3";
import {onMounted, ref} from "vue";
import TextInput from "@/Components/TextInput.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";

const props = defineProps({
    assessment: Object,
    question: Object,
})
const assessment_id = ref(null);
const urlParams = new URLSearchParams(window.location.search)
assessment_id.value = urlParams.get('assessment_id')
let table = ref([]);


const search = ref(null);
let headers = [
    {
        title: 'Question',
        align: 'start',
        key: 'name',
    },
    { title: 'Answer', key: 'answer' },
    { title: 'Choices', key: 'choices' },
    { title: 'Formula', key: 'status' },
    { title: 'Syntax', key: 'syntax' },
    { title: 'Action', key: 'action' },
]

onMounted(() => {
    table.value = props.question

    form.time_limit = props.assessment.time_limit;
    form.attempts = props.assessment.attempts;
    form.publishing_date = props.assessment.publishing_date;
    form.record_score = props.assessment.record_score;
    form.isAutoSubmit = props.assessment.isAutoSubmit === 1;
    form.isAnswerViewable = props.assessment.isAnswerViewable === 1;
    form.isAnotherTab = props.assessment.isAnotherTab === 1;
    form.visibility = props.assessment.visibility === 1;
})

const form = useForm({
    time_limit: null,
    attempts: null,
    publishing_date: null,
    record_score: null,
    isAutoSubmit: null,
    isAnswerViewable: null,
    isAnotherTab: null,
    visibility: null,
});

const deleteQuestion = (item) => {
    console.log(item);
    form.delete(route('question.destroy', item.id), {
        preserveScroll: false,
        preserveState: false,
        onFinish: () => form.reset(),
    });
};

const updateSettings = () => {
    form.patch(route('assessment.update', {
        assessment: assessment_id.value
    }), {
        preserveScroll: true,
        preserveState: true,
        onFinish: (response) => {
            console.log(response);
        }
    })
}
</script>

<template>
    <Head :title="props.assessment.name" />

    <AbleProLayout>
        <template v-slot:pageTitle>
            {{ props.assessment.name.toUpperCase() }}
        </template>
        <div class="col-sm-12">
            <div class="card shadow">
                <div class="card-body py-0">
                    <ul class="nav nav-tabs profile-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <a class="nav-link active" id="profile-tab-1" data-bs-toggle="tab" href="#class" role="tab" aria-selected="true">
                                <i class="ti ti-user me-2"></i> My Class
                            </a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="profile-tab-2" data-bs-toggle="tab" href="#members" role="tab" aria-selected="false" tabindex="-1">
                                <i class="ti ti-settings me-2"></i> Settings
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="tab-content">
                <div class="tab-pane active show" id="class" role="tabpanel" aria-labelledby="class">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                                <header>
                                    <h2 class="text-lg font-medium text-gray-900">
                                        Question List
                                    </h2>
                                </header>
                                <div class="row">
                                    <div class="d-flex justify-end">
                                        <div class="mb-3">
                                            <Link :href="route('question.create', {
                                            'assessment_id': props.assessment.id,
                                        })">
                                                <v-btn color="primary" class="float-right" prepend-icon="mdi-plus">Create</v-btn>
                                            </Link>
                                        </div>

                                    </div>
                                    <div class="col-md-12">
                                        <v-card-title class="d-flex align-center pe-2">
                                            <v-spacer></v-spacer>
                                            <v-text-field
                                                v-model="search"
                                                prepend-inner-icon="mdi-magnify"
                                                density="compact"
                                                label="Search all Fields"
                                                single-line
                                                flat
                                                hide-details
                                                variant="solo-filled"
                                            ></v-text-field>
                                        </v-card-title>
                                        <v-data-table
                                            v-model:search="search"
                                            v-model="selected"
                                            :headers="headers"
                                            :items="table"
                                            item-value="order_ref_number"
                                            class="elevation-1">
                                            <template v-slot:item="{ item }">
                                                <tr>
                                                    <td>
                                                        <div v-html="item.question"></div>
                                                    </td>
                                                    <td>{{ item.answer ?? "" }}</td>
                                                    <td>
                                                        <div v-if="assessment.type === 'Multiple Choice'">
                                                            {{ item.choices ?? "" }}
                                                        </div>
                                                    </td>
                                                    <td>
                                                        {{ item.formula ?? "" }}
                                                    </td>
                                                    <td>
                                                        {{ item.syntax ?? "" }}
                                                    </td>
                                                    <td>
                                                        <Link :href="route('question.edit', {
                                                            question: item.id
                                                        })">
                                                            <v-btn  class="mr-2" density="comfortable" icon="mdi-pencil"  color="warning"></v-btn>
                                                        </Link>
                                                        <Link :href="route('ilo.show', {
                                                            ilo: item.id
                                                        })">
                                                            <v-btn  class="mr-2" density="comfortable" icon="mdi-school"  color="warning"></v-btn>
                                                        </Link>
                                                        <v-btn @click="deleteQuestion(item)" class="mr-2 text-white" density="comfortable" icon="mdi-delete" color="danger"></v-btn>

                                                    </td>
                                                </tr>
                                            </template>
                                        </v-data-table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="members" role="tabpanel" aria-labelledby="members">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                                <header>
                                    <h2 class="text-lg font-medium text-gray-900">
                                        Settings
                                    </h2>
                                </header>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="row">
                                            <div class="col-6">
                                                <TextInput
                                                    type="number"
                                                    class="block w-100"
                                                    v-model="form.time_limit"
                                                    :required="true"
                                                    label="Time Limit (minutes)"
                                                    :error-message="form.errors.time_limit"
                                                />
                                                <TextInput
                                                    type="number"
                                                    class="block w-100"
                                                    v-model="form.attempts"
                                                    :required="true"
                                                    label="Number of Attempts"
                                                    :error-message="form.errors.attempts"
                                                />
                                            </div>
                                            <div class="col-6">
                                                <TextInput
                                                    type="date"
                                                    class="block w-100"
                                                    v-model="form.publishing_date"
                                                    :required="true"
                                                    label="Date to Publish"
                                                    :error-message="form.errors.publishing_date"
                                                />
                                                <v-select
                                                    :items="['Last Score', 'Average', 'Highest']"
                                                    type="text"
                                                    class="block w-100"
                                                    v-model="form.record_score"
                                                    :required="true"
                                                    label="What score to record"
                                                    :error-message="form.errors.record_score"
                                                    variant="outlined"
                                                />
                                            </div>
                                            <div class="col-12">
                                                <v-checkbox v-model="form.isAutoSubmit" class="pa-0" label="Automatic submission when the time limit has expired"></v-checkbox>
                                                <v-checkbox v-model="form.isAnswerViewable" class="pa-0" label="Allow view correct answer after examination"></v-checkbox>
                                                <v-checkbox v-model="form.isAnotherTab" class="pa-0" label="Detect when opening other browser"></v-checkbox>
                                                <v-checkbox v-model="form.visibility" class="pa-0" label="Visible to all"></v-checkbox>
                                            </div>
                                        </div>
                                        <div>
                                            <PrimaryButton size="large" class="w-100" @click="updateSettings">Publish</PrimaryButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </AbleProLayout>

</template>

<style scoped>

</style>
