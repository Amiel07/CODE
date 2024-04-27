<script setup>

import InputLabel from "@/Components/InputLabel.vue";
import TextInput from "@/Components/TextInput.vue";
import InputError from "@/Components/InputError.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import {router, useForm, usePage} from "@inertiajs/vue3";
import {onMounted, toRefs, watch} from "vue";
import UpdateProfileInformationForm from "@/Pages/Profile/Partials/UpdateProfileInformationForm.vue";
import {TYPE, useToast} from "vue-toastification";
import SelectComponent from "@/Components/SelectComponent.vue";
import FormComponent from "@/Components/FormComponent.vue";
const toast = useToast()

const props = defineProps({
    dialogType: {
      type: String
    },
    dialogShow: {
        type: Boolean
    },
    formRoute: {
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
    }
});
let {formRoute, formType, formContent, formTitle, formBody, dialogShow, dialogType} = toRefs(props)

const emit = defineEmits(['edit-dialog-changed'])
const closeDialog = (type) => {
    emit('close-dialog', false, type);
}

const removeRecord = async () => {
    router.delete(formRoute.value, {
        onSuccess: () => {
            emit('close-dialog', false, 'delete');
        }
    })
}

const updateRecord = async () => {

}
</script>

<template>
    <v-dialog
        v-if="dialogType === 'edit'"
        v-model="dialogShow"
        persistent
        width="700"
    >
        <v-card>
            <v-toolbar class="bg-primary" title="Edit Record">
                <v-icon icon="mdi-close" @click="closeDialog('edit')" class="mr-5"></v-icon>
            </v-toolbar>
            <v-form fast-fail @submit.prevent ref="formUpdate">
                <v-card-text>
                    <v-container>
                        <FormComponent
                            class="mt-3 mb-3"
                            form-route="dashboard.store"
                            :form-content="formContent"
                            form-type="POST"
                            form-title="Example Form component"
                            form-body="Implementation of Form Component using post"
                        />
                    </v-container>
                    <small>* indicates required field</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="blue-darken-1"
                        variant="text"
                        @click="closeDialog('edit')"
                    >
                        Close
                    </v-btn>
                    <v-btn
                        color="blue-darken-1"
                        variant="text"
                        @click="updateRecord"
                    >
                        Save
                    </v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
    </v-dialog>
    <v-dialog
        v-if="dialogType === 'delete'"
        v-model="dialogShow"
        persistent
        width="700"
    >
        <v-card>
            <v-toolbar class="bg-danger text-white" title="Remove Record">
                <v-icon icon="mdi-close" @click="closeDialog('delete')" class="mr-5"></v-icon>
            </v-toolbar>
            <v-form fast-fail @submit.prevent ref="formDelete">
                <v-card-text>
                    <v-container>
                        <h6>Are you sure you want to delete this Record?</h6>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="red-darken-1"
                        variant="text"
                        @click="removeRecord"
                    >
                        Delete
                    </v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
    </v-dialog>

</template>

<style scoped>

</style>
