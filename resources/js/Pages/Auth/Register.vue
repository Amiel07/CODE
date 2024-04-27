<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import {Head, Link, useForm} from '@inertiajs/vue3';
const urlParams = new URLSearchParams(window.location.search)

const form = useForm({
    name: '',
    email: '',
    contact: '',
    password: '',
    password_confirmation: '',
    type: urlParams.get('type')
});

const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<template>
    <GuestLayout>
        <Head title="Register" />

        <form @submit.prevent="submit">
            <div>
                <TextInput
                    id="name"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="form.name"
                    required
                    autofocus
                    label="name"
                    :error-message="form.errors.email"
                    autocomplete="name"
                />
            </div>
            <div class="mt-1">
                <TextInput
                    id="contact"
                    type="number"
                    class="mt-1 block w-full"
                    v-model="form.contact"
                    required
                    autofocus
                    label="Contact"
                    :error-message="form.errors.contact"
                    autocomplete="name"
                />
            </div>
            <div>
                <TextInput
                    id="email"
                    type="email"
                    class="mt-1 block w-full"
                    v-model="form.email"
                    required
                    autofocus
                    label="Email *"
                    :error-message="form.errors.email"
                    autocomplete="username"
                />
            </div>
            <div>
                <TextInput
                    id="password"
                    type="password"
                    class="mt-1 block w-full"
                    v-model="form.password"
                    required
                    autofocus
                    label="Password"
                    :error-message="form.errors.password"
                    autocomplete="password"
                />
            </div>
            <div>
                <TextInput
                    id="new-password"
                    type="password"
                    class="mt-1 block w-full"
                    v-model="form.password_confirmation"
                    required
                    label="Confirm Password"
                    :error-message="form.errors.password_confirmation"
                    autocomplete="new-password"
                />
            </div>
            <div>
                <TextInput
                    id="type"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="form.type"
                    required
                    label="Type"
                    readonly="true"
                    :error-message="form.errors.type"
                />
            </div>
            <div class="flex items-center justify-end mt-4">
                <Link
                    :href="route('login')"
                    class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Already registered?
                </Link>

                <PrimaryButton class="ms-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Register
                </PrimaryButton>
            </div>
        </form>
    </GuestLayout>
</template>
