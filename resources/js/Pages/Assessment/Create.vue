<script setup>
import AbleProLayout from "@/Layouts/AbleProLayout.vue";
import FormComponent from "@/Components/FormComponent.vue";
import {onMounted, ref} from "vue";
import {usePage} from "@inertiajs/vue3";

const props = defineProps({
    table: Object
})
let selected = ref([]);
let classroom_id = ref(null)
const urlParams = new URLSearchParams(window.location.search)
classroom_id.value = urlParams.get('classroom_id')



const formData = {
    classroom_id: {
        type: "text",
        label: "Classroom ID",
        isRequired: false,
        rules: [],
        selected: classroom_id.value
    },
    name: {
        type: "text",
        label: "name",
        isRequired: false,
        rules: [],
        selected: ''
    },
    type: {
        type: "select",
        label: "Type",
        isRequired: false,
        rules: [],
        selected: '',
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
            Create Assessment
        </template>

        <FormComponent
            class="mt-3 mb-3"
            form-route="assessment.store"
            :form-content="formData"
            form-type="POST"
            form-title="Create Assessment"
            form-body="Enter Assessment Details"
        />

    </AbleProLayout>
</template>
