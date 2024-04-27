<script setup>
import AbleProLayout from "@/Layouts/AbleProLayout.vue";
import FormComponent from "@/Components/FormComponent.vue";
import {onMounted, ref} from "vue";
import {usePage} from "@inertiajs/vue3";

const props = defineProps({
    table: Object,
    assessment: Object,
    assessment_id: Object
})
let selected = ref([]);
const formData = {
    name: {
        type: "text",
        label: "name",
        isRequired: false,
        rules: [],
        selected: props.assessment.name
    },
    type: {
        type: "select",
        label: "Type",
        isRequired: false,
        rules: [],
        selected: props.assessment.type,
        items: [
            {
                key: 'Multiple Choice',
                value: 'Multiple Choice'
            },
            {
                key: 'Problem Solving',
                value: 'Problem Solving'
            },
            {
                key: 'Fill in the Blank',
                value: 'Fill in the Blank'
            },
            {
                key: 'True or False',
                value: 'True or False'
            },
            {
                key: 'Matching type',
                value: 'Matching type'
            },
            {
                key: 'Essay',
                value: 'Essay'
            },
        ],
        itemValue: 'value',
        itemTitle: 'key',
    },
}

onMounted(() => {

})
</script>

<template>
    <AbleProLayout>
        <template v-slot:pageTitle>
            Update Assessment
        </template>

        <FormComponent
            class="mt-3 mb-3"
            form-route="assessment.update"
            :route-id="assessment_id"
            :route-body="'assessment'"
            :form-content="formData"
            form-type="PATCH"
            form-title="Create Assessment"
            form-body="Enter Assessment Details"
        />

    </AbleProLayout>
</template>
