<script setup>
import AbleProLayout from "@/Layouts/AbleProLayout.vue";
import FormComponent from "@/Components/FormComponent.vue";
import {ref, toRefs} from "vue";

const props = defineProps({
    table: null
})
const {table} = toRefs(props)
console.log(table.value, "Table value")
let selected = ref({});
selected.value = table.value

console.log(selected.value, "Selected")
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
        selected: selected.value?.name ?? ''
    },
    email: {
        type: "email",
        label: "email",
        isRequired: false,
        rules: [],
        selected: selected?.value?.email ?? ''
    },
}
</script>

<template>
    <AbleProLayout>
        <template v-slot:pageTitle>
            Update User
        </template>

        <FormComponent
            class="mt-3 mb-3"
            :form-route="'user.update'"
            :route-id="selected?.id"
            :form-content="formData"
            form-type="PATCH"
            form-title="Example Form component"
            form-body="Implementation of Form Component using post"
        />

    </AbleProLayout>
</template>
