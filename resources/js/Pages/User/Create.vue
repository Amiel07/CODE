<script setup>
import AbleProLayout from "@/Layouts/AbleProLayout.vue";
import FormComponent from "@/Components/FormComponent.vue";
import {ref} from "vue";

const props = defineProps({
    table: Object
})

let selected = ref([]);

const formData = {
    // file_upload: {
    //     type: "file",
    //     label: "Upload Avatar",
    //     isRequired: true,
    //     rules: [],
    //     selected: selected.attachment ?? '',
    // },
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
</script>

<template>
    <AbleProLayout>
        <template v-slot:pageTitle>
            Create User
        </template>

        <FormComponent
            class="mt-3 mb-3"
            form-route="user.store"
            :form-content="formData"
            form-type="POST"
            form-title="Example Form component"
            form-body="Implementation of Form Component using post"
        />

    </AbleProLayout>
</template>
