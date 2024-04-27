<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import {Link} from '@inertiajs/vue3';
</script>

<template>
    <div style="background-image: url('loginbg.jpg') !important; background-size: cover; background-repeat: no-repeat">
        <div class="auth-main">
            <div class="auth-wrapper">
                <div class="auth-form">
                    <div class="col-6 d-flex justify-content-center align-items-center vh-100">

                        <div class="card my-5">
                            <div class="card-header">
                                <Link href="/" class="d-flex justify-content-center">
                                    <ApplicationLogo class="w-25 h-25 fill-current text-gray-500" />
                                </Link>
                            </div>
                            <div class="card-body">
                                <slot />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
