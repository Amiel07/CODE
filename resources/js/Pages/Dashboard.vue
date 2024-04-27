<script setup>
import AbleProLayout from "@/Layouts/AbleProLayout.vue";
import {Link, usePage} from '@inertiajs/vue3';
import {onMounted, ref} from "vue";

const props = defineProps({
    classroom: Object,
    classroomUser: Object
})

const user = usePage().props.auth.user;
const classroomUser = ref([])
console.log(props.classroomUser)
onMounted(() => {
    classroomUser.value = props.classroomUser
})

</script>

<template>
    <AbleProLayout v-if="user.type === 'instructor'">
        <template v-slot:pageTitle>
            Dashboard
        </template>
        <div class="text-end">
            <Link :href="route('classroom.create')">
                <v-btn size="large" prepend-icon="mdi-school" color="blue" class="w-25">Add Class</v-btn>
            </Link>
        </div>
        <section>
            <div class="row">
                <div class="col-md-4" v-for="classroom in props.classroom">
                    <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg mt-3" >
                        <header>
                            <h2 class="text-lg font-medium text-gray-900">
                                {{ classroom.name }}
                            </h2>
                        </header>
                        <div>
                            {{ classroom.description }}
                            <br />
                            <strong>Code: </strong> {{ classroom.class_code }}
                            <v-divider />
                            <Link :href="route('classroom.show', classroom.id)">
                                <v-btn color="primary" stacked>View {{ classroom.name }}</v-btn>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    </AbleProLayout>
    <AbleProLayout v-if="user.type === 'student'">
        <template v-slot:pageTitle>
            Dashboard
        </template>
        <div class="text-end">
            <Link :href="route('classroom.join')">
                <v-btn size="large" prepend-icon="mdi-school" color="blue" class="w-25">Join Class</v-btn>
            </Link>
        </div>
        <section>
            <div class="row">
                <div class="col-md-4" v-for="classroom in props.classroomUser">
                    <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg mt-3" >
                        <header>
                            <h2 class="text-lg font-medium text-gray-900">
                                {{ classroom.classroom?.name }}
                            </h2>
                        </header>
                        <div>
                            {{ classroom.classroom?.description }}
                            <br />
                            <strong>Code: </strong> {{ classroom.classroom?.class_code }}
                            <v-divider />
                            <Link :href="route('classroom.show', classroom.classroom?.id)">
                                <v-btn color="primary" stacked>View {{ classroom.classroom?.name }}</v-btn>
                            </Link>
                            <Link :href="route('classroom.unjoin', {
                                id: classroom.id
                            })" method="patch">
                                <v-btn color="danger" class="ml-3 text-white" stacked>Un-join {{ classroom.name }}</v-btn>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    </AbleProLayout>
</template>

<style>
.rounded-large {
    border-radius: 4rem;
}

.bg-card {
    background-image: url('https://lh3.googleusercontent.com/gIrG8AMwLDarHJMs68aoBE327dT_O74kyQe5rVddstbe_ndAk5PXSf0UrzCI1PbZlPDhLN0TFWuIb7CkpNuZghX4VRgX3wOjzNeg5axIz8ISTI5CZQ=w1200-rj');
    background-size: cover;
}

.bg-card-b {
    background-image: url('https://lh3.googleusercontent.com/CAW8df0-OQi3LCK0yKewayBIXwGEJl3RceztrFQtQ1uDk-qv1cStc4PlPfscT408dRnqz20f43XkRoIa_5nom0bVJR4VFNF1crJ-6sOnQzbW-DlNrSjF=w1200-rj');
    background-size: cover;
}
</style>
