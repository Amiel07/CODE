<script setup>
import {defineProps, onMounted, ref} from 'vue';

const model = defineModel({
    type: String,
    required: false,
});

defineProps({
    label: "",
    errorMessage: null,
    type: "text",
    placeholder: null,
    variant: "outlined",
    rules: null,
})

const input = ref(null);

onMounted(() => {
    if (input.value.hasAttribute('autofocus')) {
        input.value.focus();
    }
});

defineExpose({ focus: () => input.value.focus() });
</script>

<template>
    <v-text-field
        :type="type"
        :label="label?.charAt(0)?.toUpperCase() + label?.slice(1)"
        variant="outlined"
        v-model="model"
        :error-messages="errorMessage"
        ref="input"
        :rules="rules"
    />
</template>
