<script setup>
import AbleProLayout from "@/Layouts/AbleProLayout.vue";
import FormComponent from "@/Components/FormComponent.vue";
import {onMounted, ref} from "vue";
import {usePage} from "@inertiajs/vue3";

const formData = {
    classroom_code: {
        type: "text",
        label: "Classroom Code",
        isRequired: false,
        rules: [],
        selected: ''
    },

}

onMounted(() => {

})
</script>

<template>
    <AbleProLayout>
        <template v-slot:pageTitle>
            Join Classroom
        </template>

        <FormComponent
            class="mt-3 mb-3"
            form-route="userClassroom.store"
            :form-content="formData"
            form-type="POST"
            form-title="Join Classroom"
            form-body=""
        />

    </AbleProLayout>
</template>
