<script setup>
import AbleProLayout from "@/Layouts/AbleProLayout.vue";
import FormComponent from "@/Components/FormComponent.vue";
import {ref} from "vue";

const props = defineProps({
    table: Object
})
const classroom_id = ref(null);
const urlParams = new URLSearchParams(window.location.search)
classroom_id.value = urlParams.get('classroom_id')
let selected = ref([]);

const formData = {
    question_id: {
        type: "hidden",
        label: "Classroom ID",
        isRequired: false,
        rules: [],
        selected: classroom_id.value,
    },
    ilo: {
        type: "text",
        label: "ILO",
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
}
</script>

<template>
    <AbleProLayout>
        <template v-slot:pageTitle>
            Create ILO
        </template>

        <FormComponent
            class="mt-3 mb-3"
            form-route="ilo.store"
            :form-content="formData"
            form-type="POST"
            form-title="Create ILO"
            form-body="Enter Intended Learning Outcome Details"
        />

    </AbleProLayout>
</template>
