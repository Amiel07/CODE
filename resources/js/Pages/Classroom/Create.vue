<script setup>
import AbleProLayout from "@/Layouts/AbleProLayout.vue";
import FormComponent from "@/Components/FormComponent.vue";
import {ref} from "vue";

const props = defineProps({
    table: Object
})

let selected = ref([]);

const formData = {
    name: {
        type: "text",
        label: "name",
        isRequired: false,
        rules: [],
        selected: ''
    },
    description: {
        type: "text",
        label: "description",
        isRequired: false,
        rules: [],
        selected: ''
    },
    class_code: {
        type: "text",
        label: "Class Code",
        isRequired: false,
        rules: [],
        selected: Math.random().toString(36).slice(2).toUpperCase()
    },
}
</script>

<template>
    <AbleProLayout>
        <template v-slot:pageTitle>
            Create Classroom
        </template>

        <FormComponent
            class="mt-3 mb-3"
            form-route="classroom.store"
            :form-content="formData"
            form-type="POST"
            form-title="Create Classroom"
            form-body="Enter Class Details"
        />

    </AbleProLayout>
</template>
