<script setup>

import TextInput from "@/Components/TextInput.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import {useForm, usePage} from "@inertiajs/vue3";
import {onMounted, toRefs, watch} from "vue";
import {TYPE, useToast} from "vue-toastification";
import SelectComponent from "@/Components/SelectComponent.vue";
const toast = useToast()

const props = defineProps({
    formRoute: {
        type: String,
    },
    routeId: {
        type: String,
    },
    formType: {
        type: String
    },
    formContent: {
        type: Object
    },
    formTitle: {
        type: String,
    },
    formBody: {
        type: String
    },
    routeBody: {
        type: String
    }
});

const {formRoute, formType, formContent, formTitle, formBody, routeId, routeBody} = toRefs(props)

const uploadInputs = [];

const formSubmitSettings = (type) => {
    return {
        _method: type,
        forceFormData: true,
        preserveScroll: true,
        onProgress: () => {
            console.log("form submitting");
        },
        onSuccess: (data) => {
            form.reset();
            toast("Record successfully saved", {
                autoClose: 3500,
                type: "success",
                transition: "slide",
                theme: "colored"
            });
        },
        onError: () => {
            toast("There was an error with your action", {
                autoClose: 3500,
                type: "error",
                transition: "slide",
                theme: "colored"
            });
        },
        onFinish: () => {
        //     TODO: RESET UPLOAD FORM
        //     resetUploadForms();
        }
    };
};

const formData = []
Object.keys(formContent.value).map(function(key) {
    if(formContent.value[key].hasOwnProperty('selected')){
        formData.push({
            'key': key,
            'value': formContent.value[key].selected
        });
    }
});

const form = useForm(formData.reduce((obj, item) => {
    obj[item.key] = item.value;
    return obj;
}, {}));
const formSubmit = () => {

    if (formType.value === 'POST') {
        form.post(route(formRoute.value), formSubmitSettings('POST'));
    } else if (formType.value === 'PATCH') {
        form.put(route(formRoute.value, routeId.value), {
            preserveScroll: true,
            onProgress: () => {
                console.log("form submitting");
            },
            onSuccess: (data) => {
                toast("Record successfully saved", {
                    autoClose: 3500,
                    type: "success",
                    transition: "slide",
                    theme: "colored"
                });
            },
            onError: () => {
                toast("There was an error with your action", {
                    autoClose: 3500,
                    type: "error",
                    transition: "slide",
                    theme: "colored"
                });
            },
            onFinish: () => {
                //     TODO: RESET UPLOAD FORM
                //     resetUploadForms();
            }
        });
    }

};

const handleFile = (file, index) => {
    if (file){
        console.log(form[index])
        form[index] = file[0]
        uploadInputs.push(index)
    }
}

const resetUploadForms = () => {
    console.log(uploadInputs);
    uploadInputs.some((input) => {
        console.log(input)
        input.value.reset()
    })
}
</script>

<template>
    <section>
        <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
            <header>
                <h2 class="text-lg font-medium text-gray-900">
                    {{ formTitle }}
                </h2>
                <p class="mt-1 text-sm text-gray-600">
                    {{ formBody }}
                </p>
            </header>
            <v-form @submit.prevent="formSubmit" class="mt-6 space-y-3">
                <div v-for="(value, index) in formContent">
                    <!-- TODO: IMPLEMENT FILE UPLOAD WITH MULTIPLE FILES -->
                    <TextInput
                        v-if="value.type !== 'file' && value.type !== 'select'"
                        :id="index"
                        :type="value.type"
                        class="block w-full"
                        v-model="form[index]"
                        :required="value.isRequired"
                        :label="value.label"
                        v-show="value.type !== 'hidden'"
                        :error-message="form.errors[index]"
                    />
                    <TextInput
                        v-if="value.type === 'file'"
                        :id="index"
                        :type="value.type"
                        class="block w-full"
                        :required="value.isRequired"
                        :label="value.label"
                        :error-message="form.errors[index]"
                        :ref="index"
                        @input="handleFile($event.target.files, index)"
                    />

                    <SelectComponent
                        v-if="value.type === 'select'"
                        :id="index"
                        class="block w-full"
                        :required="value.isRequired"
                        :label="value.label"
                        :error-message="form.errors[index]"
                        :ref="index"
                        v-model="form[index]"
                        :item-value="value.itemValue"
                        :item-title="value.itemTitle"
                        :items="value.items"
                    />
                </div>
                <div class="flex items-center">
                    <progress v-if="form.progress" :value="form.progress.percentage" max="100" class="w-full">
                        {{ form.progress.percentage }}%
                    </progress>
                </div>
                <div class="flex items-center gap-4">
                    <PrimaryButton :disabled="form.processing" class="w-full">Save</PrimaryButton>
<!--                    <Transition-->
<!--                        enter-active-class="transition ease-in-out"-->
<!--                        enter-from-class="opacity-0"-->
<!--                        leave-active-class="transition ease-in-out"-->
<!--                        leave-to-class="opacity-0"-->
<!--                    >-->
<!--                        <p v-if="form.recentlySuccessful" class="text-sm text-gray-600">Saved.</p>-->
<!--                    </Transition>-->
                </div>
            </v-form>
        </div>
    </section>
</template>

<style scoped>

</style>
