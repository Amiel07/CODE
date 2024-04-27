<script setup>

import ResponsiveNavLink from "@/Components/ResponsiveNavLink.vue";
import {usePage} from "@inertiajs/vue3";
const user = usePage().props.auth.user;

</script>

<template>
    <ul class="pc-navbar">
        <li class="pc-item pc-caption">
            <label>Analytics</label>
        </li>
        <li class="pc-item">
            <ResponsiveNavLink :href="route('dashboard.index')" :active="route().current('dashboard.index')">
                <span class="pc-micon">
                    <svg class="pc-icon">
                        <use xlink:href="#custom-home"></use>
                    </svg>
                </span>
                <span class="pc-mtext">Dashboard</span>
            </ResponsiveNavLink>
            <ResponsiveNavLink :href="route('calendar.index')" :active="route().current('calendar.index')">
                <span class="pc-micon">
                    <svg class="pc-icon">
                        <use xlink:href="#custom-calendar-1"></use>
                    </svg>
                </span>
                <span class="pc-mtext">Calendar</span>
            </ResponsiveNavLink>
        </li>
    </ul>
</template>

<style scoped>

</style>
