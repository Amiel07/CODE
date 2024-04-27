<script setup>

import AbleProLayout from "@/Layouts/AbleProLayout.vue";
import {Head, Link, useForm, usePage} from "@inertiajs/vue3";
import {onMounted, ref} from "vue";

const props = defineProps({
    ilo: Object,
    question: Object,
})

let table = ref([]);
let selected = ref([]);

const search = ref(null);
let headers = [
    {
        title: 'ILO',
        align: 'ilo',
        key: 'name',
    },
    { title: 'Description', key: 'description' },
    { title: 'Action', key: 'action' },
]

let tableMembers = ref([]);

onMounted(() => {
    table.value = props.ilo
})

const openDialog = async () => {

}
const form = useForm({})
const deleteIlo = async (item) => {
    form.delete(route('ilo.destroy', item.id), {
        preserveScroll: false,
        preserveState: false,
        onFinish: () => form.reset(),
    });
}
</script>

<template>

    <AbleProLayout>

        <div class="col-sm-12">
            <div class="card shadow">
                <div class="card-body py-0">
                    <ul class="nav nav-tabs profile-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <a class="nav-link active" id="profile-tab-1" data-bs-toggle="tab" href="#class" role="tab" aria-selected="true">
                                <i class="ti ti-user me-2"></i>Intended Learning Outcome
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
                                        ILO List
                                    </h2>
                                </header>
                                <div class="row">
                                    <Link :href="route('ilo.create', {
                                        'classroom_id': props.question.id,
                                    })">
                                        <v-btn color="primary" class="float-right" prepend-icon="mdi-plus">Create</v-btn>
                                    </Link>
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
                                                    <td>{{ item.ilo }}</td>
                                                    <td>{{ item.description }}</td>
                                                    <td>
                                                        <Link :href="route('ilo.edit', {
                                                            ilo: item.id
                                                        })">
                                                            <v-btn  class="mr-2" density="comfortable" icon="mdi-pencil"  color="success"></v-btn>
                                                        </Link>
                                                        <v-btn @click="deleteIlo(item)" class="mr-2 text-white" density="comfortable" icon="mdi-delete" color="danger"></v-btn>
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
            </div>
        </div>
    </AbleProLayout>

</template>

<style scoped>

</style>
