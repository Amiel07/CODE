<script setup>
import AbleProLayout from "@/Layouts/AbleProLayout.vue";
import FormComponent from "@/Components/FormComponent.vue";
import {onMounted, ref} from "vue";
import {usePage} from "@inertiajs/vue3";

const props = defineProps({
    assessment: Object,
    assessment_all: Object
})
let selected = ref([]);
let assessment_id = ref(null)
let transformed = ref();

let url = window.location.href;
let parts = url.split('/');
let number = parts[parts.length - 1];
assessment_id.value = number;

transformed.value = Object.entries(props.assessment_all).map(([key, value]) => {
    console.log(value);
    let formattedKey = value?.name + ' - ' + value?.created_by?.name;
    return { key: formattedKey, value: value?.id };
});

console.log(transformed.value);

const formData = {
    assessment_id: {
        type: "hidden",
        label: "Assessment ID",
        isRequired: false,
        rules: [],
        selected: assessment_id.value
    },
    to_copy: { //classroom_id to copy
        type: "select",
        label: "Copy to",
        isRequired: false,
        rules: [],
        selected: '',
        items: transformed.value,
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
            Copy Assessment
        </template>

        <FormComponent
            class="mt-3 mb-3"
            form-route="assessment.save-copy"
            :form-content="formData"
            form-type="POST"
            form-title="Copy Assessment"
            form-body="Copy Assessment Details"
        />

    </AbleProLayout>
</template>
