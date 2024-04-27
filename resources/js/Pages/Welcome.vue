<script setup>
import {Head, Link} from '@inertiajs/vue3';
import PrimaryButton from "@/Components/PrimaryButton.vue";

defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
    laravelVersion: {
        type: String,
        required: true,
    },
    phpVersion: {
        type: String,
        required: true,
    },
});

function handleImageError() {
    document.getElementById('screenshot-container')?.classList.add('!hidden');
    document.getElementById('docs-card')?.classList.add('!row-span-1');
    document.getElementById('docs-card-content')?.classList.add('!flex-row');
    document.getElementById('background')?.classList.add('!hidden');
}
</script>

<template>
    <Head title="Welcome" />
    <div class="bg-gray-50 text-white grid place-items-center min-h-screen" style="background-image: url('loginbg.jpg'); background-size: cover; background-repeat: no-repeat">
       <v-card class="pa-4">
           <v-container fluid class="fill-height d-flex align-center justify-center">
               <v-card-item class="text-center">
                   <img src="LOGO1.png" alt="logo" class="img img-fluid w-33">
                   <div class="text-h5 font-weight-bold ma-0 pa-0">Sign-up</div>
               </v-card-item>
           </v-container>
           <v-card-item>
               <v-row class="flex align-center items-center justify-center content-center">
                   <v-col
                       cols="12">
                       <Link :href="route('login')">
                           <PrimaryButton class="w-100" size="x-large">LOGIN</PrimaryButton>
                       </Link>
                   </v-col>
                   <v-col
                       cols="12">
                       <Link :href="route('register', {
                           'type': 'instructor'
                       })">
                           <PrimaryButton class="w-100" size="x-large">Instructor</PrimaryButton>
                       </Link>
                   </v-col>
                   <v-col
                       cols="12">
                       <Link :href="route('register', {
                           'type': 'student'
                       })">
                           <PrimaryButton class="w-100" size="x-large">STUDENT</PrimaryButton>
                       </Link>
                   </v-col>

               </v-row>

           </v-card-item>
       </v-card>
    </div>
</template>
