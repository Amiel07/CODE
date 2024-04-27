<script setup>

import AbleProLayout from "@/Layouts/AbleProLayout.vue";
import {Head, Link} from "@inertiajs/vue3";
import {onMounted, ref} from "vue";

const props = defineProps({
    assessment: Object,
    question: Object,
})

let table = ref([]);


const search = ref(null);
let headers = [
    {
        title: 'Question',
        align: 'start',
        key: 'name',
    },
    { title: 'Answer', key: 'type' },
    { title: 'Formula', key: 'status' },
    { title: 'Action', key: 'action' },
]

onMounted(() => {
    table.value = props.question

})
</script>

<template>
    <Head :title="props.classroom.name" />

    <AbleProLayout>
        <template v-slot:pageTitle>
            {{ props.classroom.name.toUpperCase() }} - {{ props.classroom.class_code }}
        </template>
        <div class="col-sm-12">
            <div class="card shadow">
                <div class="card-body py-0">
                    <ul class="nav nav-tabs profile-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <a class="nav-link active" id="profile-tab-1" data-bs-toggle="tab" href="#class" role="tab" aria-selected="true">
                                <i class="ti ti-user me-2"></i>My Class
                            </a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="profile-tab-2" data-bs-toggle="tab" href="#members" role="tab" aria-selected="false" tabindex="-1">
                                <i class="ti ti-file-text me-2"></i>Members
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
                                    <div class="col-12 mb-3">
                                        <Link :href="route('assessment.create', {
                                            'assessment_id': props.classroom.id,
                                        })">
                                            <v-btn color="primary" class="float-right" prepend-icon="mdi-plus">Create</v-btn>
                                        </Link>
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
                                            class="elevation-1"
                                        >
                                            <template v-slot:item="{ item }">
                                                <tr>
                                                    <td>{{ item.name }}</td>
                                                    <td>{{ item.type }}</td>
                                                    <td>{{ item.status }}</td>
                                                    <td>
                                                        <Link :href="route('question.index', item.id)">
                                                            <v-btn  class="mr-2" density="comfortable" icon="mdi-pencil"  color="warning"></v-btn>
                                                        </Link>
                                                        <v-btn @click="openDialog('delete', item)"  class="mr-2 text-white" density="comfortable" icon="mdi-delete" color="danger"></v-btn>
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

                    </div>
                </div>
            </div>
        </div>
    </AbleProLayout>

</template>

<style scoped>

</style>
