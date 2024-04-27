<script setup>
import AbleProLayout from "@/Layouts/AbleProLayout.vue";
import FormComponent from "@/Components/FormComponent.vue";
import {ref} from "vue";

const props = defineProps({
    ilo: Object
})

let selected = ref([]);

const formData = {
    ilo: {
        type: "text",
        label: "ILO",
        isRequired: false,
        rules: [],
        selected: props.ilo.ilo
    },
    description: {
        type: "text",
        label: "description",
        isRequired: false,
        rules: [],
        selected: props.ilo.description
    },
}
</script>

<template>
    <AbleProLayout>
        <template v-slot:pageTitle>
            Update ILO
        </template>

        <FormComponent
            class="mt-3 mb-3"
            :route-id="props.ilo.id"
            :route-body="'ilo'"
            form-route="ilo.update"
            :form-content="formData"
            form-type="PATCH"
            form-title="Update ILO"
            form-body="Update Intended Learning Outcome Details"
        />

    </AbleProLayout>
</template>
