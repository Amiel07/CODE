<script setup>
import AbleProLayout from "@/Layouts/AbleProLayout.vue";
import FormComponent from "@/Components/FormComponent.vue";
import {ref, toRefs} from "vue";
import Dropdown from "@/Components/Dropdown.vue";
import DialogComponent from "@/Components/DialogComponent.vue";
import {Link} from '@inertiajs/vue3';

const props = defineProps({
    table: Object
})
let selected = ref([]);

const formData = {
    file_upload: {
        type: "file",
        label: "Upload Avatar",
        isRequired: true,
        rules: [],
        selected: selected.attachment ?? '',
    },
    name: {
        type: "text",
        label: "name",
        isRequired: false,
        rules: [],
        selected: selected?.name ?? ''
    },
    email: {
        type: "email",
        label: "email",
        isRequired: false,
        rules: [],
        selected: selected.email ?? ''
    },
    password: {
        type: "password",
        label: "password",
        isRequired: true,
        rules: [],
        selected: selected.password ?? ''
    },
    password_confirmation: {
        type: "password",
        label: "Confirm Password",
        isRequired: true,
        rules: [],
        selected: selected.password_confirmation ?? ''
    },
}

const search = ref(null);
let headers = [
    {
        title: 'Name',
        align: 'start',
        key: 'name',
    },
    { title: 'Email', key: 'email' },
    { title: 'Action', key: 'action' },
]

let dialogType = ref(null);
const dialogShow = ref(false);
const openDialog = async(type, item) => {
    selected.value = item;
    dialogType.value = type;
    dialogShow.value = true;
}

const handleDialogChange = (value, type) => {
    dialogType.value = type;
    dialogShow.value = false;
};
</script>

<template>
    <AbleProLayout>
        <template v-slot:pageTitle>
            User List
        </template>
        <div class="row">
            <div class="col-12 mb-3">
                <Link :href="route('user.create')">
                    <v-btn color="primary" class="float-right" prepend-icon="mdi-plus">Create</v-btn>
                </Link>
            </div>
            <div class="col-md-12">
                <v-card border>
                    <v-card-title class="d-flex align-center pe-2">
                        <v-icon icon="mdi-database"></v-icon> &nbsp;
                        User List
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
                                <td>{{ item.email }}</td>
                                <td>
                                    <Link :href="route('user.edit', item.id)">
                                        <v-btn  class="mr-2" density="comfortable" icon="mdi-pencil"  color="warning"></v-btn>
                                    </Link>
                                    <v-btn @click="openDialog('delete', item)"  class="mr-2 text-white" density="comfortable" icon="mdi-delete" color="danger"></v-btn>
                                </td>
                            </tr>
                        </template>
                    </v-data-table>
                </v-card>
            </div>
        </div>
        <DialogComponent
            @close-dialog="handleDialogChange"
            :dialogType="dialogType"
            :dialog-show="dialogShow"
            :form-route="`/user/${selected.id}`"
            :form-content="formData"
            :selectedValue="selected"
            form-type="delete"
        />
    </AbleProLayout>
</template>
