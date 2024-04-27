<script setup>

import AbleProLayout from "@/Layouts/AbleProLayout.vue";
import {Head, Link, useForm, usePage} from "@inertiajs/vue3";
import {computed, onMounted, ref} from "vue";

const props = defineProps({
    classroom: Object,
    assessment: Object,
    members: Object,
    gradebook: Object
})


const user = usePage().props.auth.user;

let table = ref([]);


const search = ref(null);
let headers = [
    {
        title: 'Name',
        align: 'start',
        key: 'name',
    },
    { title: 'Type', key: 'type' },
    { title: 'Status', key: 'status' },
    { title: 'Action', key: 'action' },
]

let headerMembers = [
    {
        title: 'Name',
        align: 'start',
        key: 'name',
    },
    { title: 'Email', key: 'email' },
    { title: 'Contact', key: 'contact' },
    { title: 'Action', key: 'action' },
]

let tableMembers = ref([]);
let selectedMembers = ref([]);


onMounted(() => {
    table.value = props.assessment
    tableMembers.value = props.members;
})

const openDialog = async () => {

}
let arrayToCsv = (data) => {

    let keys = new Set();
    data.forEach(obj => Object.keys(obj).forEach(key => keys.add(key)));

    keys = Array.from(keys);

    // Construct CSV
    const csv = [
        // Headers
        ...keys,
        // Data
        ...data.map(obj =>
            keys.map(key => obj[key] ?? '').join(',')
        )
    ].join('\n');

    return csv;
};

let downloadBlob = (content, filename, contentType) => {
    let blob = new Blob([content], { type: contentType });
    const url = URL.createObjectURL(blob);

    const pom = document.createElement('a');
    pom.href = url;
    pom.setAttribute('download', filename);
    pom.click();
}

const exportData = async () => {
    console.log(tableMembers.value)
    let formattedMembers = tableMembers.value.map((member) => {
        let gradesObject = {};
        member.user.assessment_result.forEach((result, idx) => {
            gradesObject[`${result.assessment.name} - ${idx + 1}`] = result.grade;
        });
        return {
            name: member.user.name,
            ...gradesObject,
        };
    });

    console.log(formattedMembers);
    const myLogs = arrayToCsv(formattedMembers);
    downloadBlob(myLogs, './grade_report.csv', 'text/csv;charset=utf-8;');
}

const form = useForm({});
const deleteItem = (item) => {
    form.delete(route('assessment.destroy', item.id), {
        preserveScroll: false,
        preserveState: false,
        onFinish: () => form.reset(),
    });
}

const deleteMembers = (item) => {
    form.delete(route('assessment.destroy', item.id), {
        preserveScroll: false,
        preserveState: false,
        onFinish: () => form.reset(),
    });
}

const percentGrade = computed(() => {

})

const deleteClass = () => {
    form.delete(route('classroom.destroy', {
        id: props.classroom.id
    }))
}
</script>

<template>
    <Head :title="props.classroom.name" />

    <AbleProLayout>
        <template v-slot:pageTitle>
            <div class="flex justify-between">
                <div class="align-start">
                    {{ props.classroom.name.toUpperCase() }} - {{ props.classroom.class_code }}
                </div>
                <div class="align-end ml-3">
                    <v-btn @click="deleteClass" v-if="user.type === 'instructor'" class="mr-2 text-white" density="comfortable" prepend-icon="mdi-delete" color="danger">Delete Class</v-btn>
                </div>
            </div>

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
                        <li class="nav-item" role="presentation" v-if="user.type === 'instructor'">
                            <a class="nav-link" id="profile-tab-2" data-bs-toggle="tab" href="#gradebook" role="tab" aria-selected="false" tabindex="-1">
                                <i class="ti ti-file-text me-2"></i>Gradebook
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
                                        Assessment List
                                    </h2>
                                </header>
                                <div class="row">
                                    <div class="col-12 mb-3" v-if="user.type === 'instructor'">
                                        <Link :href="route('assessment.create', {
                                            'classroom_id': props.classroom.id,
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
                                                        <Link :href="route('question.index', {
                                                            'assessment_id': item.id
                                                        })" v-if="user.type === 'instructor'">
                                                            <v-btn  class="mr-2" density="comfortable" icon="mdi-chat-question"  color="warning"></v-btn>
                                                        </Link>
                                                        <Link :href="route('assessment.take', {
                                                            'assessment_id': item.id
                                                        })" v-else>
                                                            <v-btn  class="mr-2" density="comfortable" icon="mdi-forum"  color="warning"></v-btn>
                                                        </Link>
                                                        <Link :href="route('assessment.edit', {
                                                            'assessment': item.id
                                                        })" v-if="user.type === 'instructor'">
                                                            <v-btn  class="mr-2" density="comfortable" icon="mdi-pencil"  color="success"></v-btn>
                                                        </Link>
                                                        <Link :href="route('assessment.copy', {
                                                            'id': item.id
                                                        })" v-if="user.type === 'instructor'">
                                                            <v-btn  class="mr-2" density="comfortable" icon="mdi-clipboard"  color="primary"></v-btn>
                                                        </Link>
                                                        <v-btn @click="deleteItem(item)" v-if="user.type === 'instructor'" class="mr-2 text-white" density="comfortable" icon="mdi-delete" color="danger"></v-btn>
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
                                        Member List
                                    </h2>
                                </header>
                                <div class="row">

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
                                            v-model="selectedMembers"
                                            :headers="headerMembers"
                                            :items="tableMembers"
                                            item-value="order_ref_number"
                                            class="elevation-1"
                                        >
                                            <template v-slot:item="{ item }">
                                                <tr>
                                                    <td>{{ item.user?.name }}</td>
                                                    <td>{{ item.user?.email }}</td>
                                                    <td>{{ item.user?.contact }}</td>
                                                    <td>
<!--                                                        <v-btn @click="openDialog('delete', item)"  class="mr-2 text-white" density="comfortable" icon="mdi-delete" color="danger"></v-btn>-->
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
                <div class="tab-pane" id="gradebook" role="tabpanel" aria-labelledby="gradebook" v-if="user.type === 'instructor'">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                                <header>
                                    <h2 class="text-lg font-medium text-gray-900">
                                        GradeBook
                                    </h2>
                                </header>
                                <div class="row">
                                    <div class="col-12 mb-3">
                                        <v-btn color="primary" class="float-right" prepend-icon="mdi-cloud-download" @click="exportData">Export</v-btn>
                                    </div>
                                    <div class="col-md-12">
                                        <v-expansion-panels>
                                            <v-expansion-panel
                                                v-for="member in tableMembers"
                                            >
                                                <v-expansion-panel-title>
                                                    {{ member.user?.name }}
                                                </v-expansion-panel-title>
                                                <v-expansion-panel-text>
                                                    <v-table class="table table-responsive table-bordered">
                                                        <thead>
                                                        <tr>
                                                            <td class="font-bold">Assessment</td>
                                                            <td class="font-bold">Grade</td>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr v-for="grade in member.user?.assessment_result">
                                                                <td>{{ grade?.assessment?.name }}</td>
                                                                <td>{{ grade.grade }}</td>
                                                            </tr>
                                                        </tbody>
                                                    </v-table>
                                                    <div class="font-bold text-right">
                                                        Final Grade: {{
                                                            member.user?.assessment_result?.length > 0
                                                                ? (
                                                                    (member.user.assessment_result.reduce((total, grade) => total + (Number(grade.grade) || 0), 0) /
                                                                        (member.user.assessment_result.length * 100)) * 100
                                                                ).toFixed(2)
                                                                : 'N/A'
                                                        }} %
                                                    </div>
                                                </v-expansion-panel-text>
                                            </v-expansion-panel>
                                        </v-expansion-panels>
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
