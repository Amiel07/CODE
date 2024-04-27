<script setup>
import {defineProps, onMounted, ref} from 'vue';

const model = defineModel({
    type: String,
    required: false,
});

defineProps({
    label: "",
    errorMessage: null,
    placeholder: null,
    variant: "outlined",
    items: [],
    itemTitle: null,
    itemValue: null,
})

const input = ref(null);

onMounted(() => {

});

</script>

<template>
    <v-select
        variant="outlined"
        v-model="model"
        :label="label?.charAt(0)?.toUpperCase() + label?.slice(1)"
        :items="items"
        :item-title="itemTitle"
        :item-value="itemValue"
    ></v-select>
</template>
