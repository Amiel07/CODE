<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';

import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import {Head, Link, useForm} from '@inertiajs/vue3';

defineProps({
    canResetPassword: {
        type: Boolean,
    },
    status: {
        type: String,
    },
    canRegister: {
        type: Boolean
    }
});

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <GuestLayout>
        <Head title="Log in" />

        <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
            {{ status }}
        </div>
        <form @submit.prevent="submit">
            <div>
                <TextInput
                    id="email"
                    type="email"
                    class="mt-1 block w-full"
                    v-model="form.email"
                    required
                    autofocus
                    label="Email"
                    :error-message="form.errors.email"
                    autocomplete="username"
                />
            </div>
            <div class="mt-4">
                <TextInput
                    id="password"
                    type="password"
                    label="Password"
                    class="mt-1 block w-full"
                    v-model="form.password"
                    :error-message="form.errors.password"
                    required
                    autocomplete="current-password"
                />
                <Link
                    v-if="canResetPassword"
                    :href="route('password.request')"
                    class="underline text-sm flex justify-end text-right text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Forgot your password?
                </Link>
            </div>

            <div class="block mt-1">
                <label class="flex items-center">
                    <v-checkbox name="remember" v-model:checked="form.remember" label="Remember me" color="primary" />
                </label>
            </div>

            <div class="flex items-center justify-end mt-4">
                <Link
                    v-if="canRegister"
                    :href="route('register')"
                    class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                   Don't have an account?
                </Link>
                <PrimaryButton class="ms-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Log in
                </PrimaryButton>
            </div>
        </form>
    </GuestLayout>
</template>
