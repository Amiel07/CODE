<script setup>

import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import {Link, usePage} from "@inertiajs/vue3";
import {onMounted, ref} from "vue";
import AbleProNav from "@/Layouts/Partials/AbleProNav.vue";
import axios from "axios";

const drawer = ref(true);
onMounted(() => {
    // remove pre-loader end
    if (document.querySelector('body').hasAttribute('data-pc-layout')) {
        if (document.querySelector('body').getAttribute('data-pc-layout') == 'horizontal') {
            var docW = window.innerWidth;
            if (docW <= 1024) {
                add_scroller();
            }
        }
    } else {
        add_scroller();
    }

    var hamburger = document.querySelector('.hamburger:not(.is-active)');
    if (hamburger) {
        hamburger.addEventListener('click', function () {
            if (document.querySelector('.hamburger').classList.contains('is-active')) {
                document.querySelector('.hamburger').classList.remove('is-active');
            } else {
                document.querySelector('.hamburger').classList.add('is-active');
            }
        });
    }
    // Menu overlay layout start
    var temp_overlay_menu = document.querySelector('#overlay-menu');
    if (temp_overlay_menu) {
        temp_overlay_menu.addEventListener('click', function () {
            menu_click();
            if (document.querySelector('.pc-sidebar').classList.contains('pc-over-menu-active')) {
                remove_overlay_menu();
            } else {
                document.querySelector('.pc-sidebar').classList.add('pc-over-menu-active');
                document.querySelector('.pc-sidebar').insertAdjacentHTML('beforeend', '<div class="pc-menu-overlay"></div>');
                document.querySelector('.pc-menu-overlay').addEventListener('click', function () {
                    remove_overlay_menu();
                    document.querySelector('.hamburger').classList.remove('is-active');
                });
            }
        });
    }
    // Menu overlay layout end

    // Menu collapse click start
    var mobile_collapse_over = document.querySelector('#mobile-collapse');
    if (mobile_collapse_over) {
        mobile_collapse_over.addEventListener('click', function () {
            var temp_sidebar = document.querySelector('.pc-sidebar');
            if (temp_sidebar) {
                if (document.querySelector('.pc-sidebar').classList.contains('mob-sidebar-active')) {
                    rm_menu();
                } else {
                    document.querySelector('.pc-sidebar').classList.add('mob-sidebar-active');
                    document.querySelector('.pc-sidebar').insertAdjacentHTML('beforeend', '<div class="pc-menu-overlay"></div>');
                    document.querySelector('.pc-menu-overlay').addEventListener('click', function () {
                        rm_menu();
                    });
                }
            }
        });
    }
    // Menu collapse click end

    // Menu collapse click start
    var mobile_collapse = document.querySelector('.pc-horizontal #mobile-collapse');
    if (mobile_collapse) {
        mobile_collapse.addEventListener('click', function () {
            if (document.querySelector('.topbar').classList.contains('mob-sidebar-active')) {
                rm_menu();
            } else {
                document.querySelector('.topbar').classList.add('mob-sidebar-active');
                document.querySelector('.topbar').insertAdjacentHTML('beforeend', '<div class="pc-menu-overlay"></div>');
                document.querySelector('.pc-menu-overlay').addEventListener('click', function () {
                    rm_menu();
                });
            }
        });
    }
    // Menu collapse click end
    // Horizontal menu click js start
    var topbar_link_list = document.querySelector('.pc-horizontal .topbar .pc-navbar>li>a');
    if (topbar_link_list) {
        topbar_link_list.addEventListener('click', function (e) {
            var targetElement = e.target;
            setTimeout(function () {
                targetElement.parentNodes.children[1].removeAttribute('style');
            }, 1000);
        });
    }
    // Horizontal menu click js end

    // header dropdown scrollbar start
    if (document.querySelector('.header-notification-scroll')) {
        new SimpleBar(document.querySelector('.header-notification-scroll'));
    }

    if (document.querySelector('.profile-notification-scroll')) {
        new SimpleBar(document.querySelector('.profile-notification-scroll'));
    }
    // header dropdown scrollbar end

    // component scrollbar start
    if (document.querySelector('.component-list-card .card-body')) {
        new SimpleBar(document.querySelector('.component-list-card .card-body'));
    }

    var sidebar_hide = document.querySelector('#sidebar-hide');
    if (sidebar_hide) {
        sidebar_hide.addEventListener('click', function () {
            if (document.querySelector('.pc-sidebar').classList.contains('pc-sidebar-hide')) {
                document.querySelector('.pc-sidebar').classList.remove('pc-sidebar-hide');
            } else {
                document.querySelector('.pc-sidebar').classList.add('pc-sidebar-hide');
            }
        });
    }

    if (document.querySelector('.trig-drp-search')) {
        const search_drp = document.querySelector('.trig-drp-search');
        search_drp.addEventListener('shown.bs.dropdown', (event) => {
            document.querySelector('.drp-search input').focus();
        });
    }
})
const user = usePage().props.auth.user;
const notifications = usePage().props.notifications;

const sidebarHide = () => {
    drawer.value = !drawer.value;
}

const clearNotification = () => {
    axios.get('/clearNotification')
        .then((response) => {
            console.log(response.data)
            location.reload();
        })
        .catch(error => {
            console.log(error);
        })
}
</script>

<template>
    <div id="main">
        <nav class="pc-sidebar" v-if="drawer">
            <div class="navbar-wrapper">
                <div class="m-header">
                    <a href="#" class="b-brand text-primary">
                        <center>
                            <Link :href="route('dashboard.index')">
                                <ApplicationLogo
                                    class="block h-9 w-auto fill-current text-gray-800"
                                />
                            </Link>
                        </center>
                    </a>
                </div>
                <div class="navbar-content">
                    <div class="card pc-user-card">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="flex-grow-1 ms-3 me-2">
                                    <h6 class="mb-0">{{ $page.props.auth.user.name }}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <AbleProNav />
                </div>
            </div>
        </nav>
        <header class="pc-header">
            <div class="header-wrapper"> <!-- [Mobile Media Block] start -->
                <div class="me-auto ">
                    <ul class="list-unstyled">
                        <!-- ======= Menu collapse Icon ===== -->
                        <li class="pc-h-item pc-sidebar-collapse">
                            <a href="#" class="pc-head-link ms-0" id="sidebar-hide">
                                <i class="ti ti-menu-2"></i>
                            </a>
                        </li>
                        <li class="pc-h-item pc-sidebar-popup">
                            <a href="#" class="pc-head-link ms-0" id="mobile-collapse">
                                <i class="ti ti-menu-2"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <!-- [Mobile Media Block end] -->
                <div class="ms-auto">
                    <ul class="list-unstyled">

                        <!-- notification -->
                        <li class="dropdown pc-h-item">
                            <a
                                class="pc-head-link dropdown-toggle arrow-none me-0"
                                data-bs-toggle="dropdown"
                                href="#"
                                role="button"
                                aria-haspopup="false"
                                aria-expanded="false"
                            >
                                <svg class="pc-icon">
                                    <use xlink:href="#custom-notification"></use>
                                </svg>
                                <span class="badge bg-success pc-h-badge">{{ notifications.length }}</span>
                            </a>
                            <div class="dropdown-menu dropdown-notification dropdown-menu-end pc-h-dropdown">
                                <div class="dropdown-header d-flex align-items-center justify-content-between">
                                    <h5 class="m-0">Notifications</h5>
                                    <a href="#!" @click="clearNotification" class="btn btn-link btn-sm">Mark all read</a>
                                </div>
                                <div class="dropdown-body text-wrap header-notification-scroll position-relative" style="max-height: calc(100vh - 215px)">
                                    <div class="card mb-2" v-for="notification in notifications">
                                        <div class="card-body">
                                            <div class="d-flex">
                                                <div class="flex-shrink-0">
                                                    <svg class="pc-icon text-primary">
                                                        <use xlink:href="#custom-layer"></use>
                                                    </svg>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <span class="float-end text-sm text-muted"></span>
                                                    <p class="mb-0">{{ notification.data['content'] }}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-center py-2">
                                    <a href="#" @click="clearNotification" class="link-danger">Clear all Notifications</a>
                                </div>
                            </div>
                        </li>
                        <li class="dropdown pc-h-item header-user-profile">
                            <a
                                class="pc-head-link dropdown-toggle arrow-none me-0"
                                data-bs-toggle="dropdown"
                                href="#"
                                role="button"
                                aria-haspopup="false"
                                data-bs-auto-close="outside"
                                aria-expanded="false"
                            >
                                <ApplicationLogo />
                                <!--                            <img src="{{ asset('admin') }}/images/user/avatar-2.jpg" alt="user-image" class="user-avtar" />-->
                            </a>
                            <div class="dropdown-menu dropdown-user-profile dropdown-menu-end pc-h-dropdown">
                                <div class="dropdown-header d-flex align-items-center justify-content-between">
                                    <h5 class="m-0">Profile</h5>
                                </div>
                                <div class="dropdown-body">
                                    <div class="profile-notification-scroll position-relative" style="max-height: calc(100vh - 225px)">
                                        <div class="d-flex mb-1">
                                            <div class="flex-shrink-0">
                                                <!--                                            <img src="{{ asset('admin') }}/images/user/avatar-2.jpg" alt="user-image" class="user-avtar wid-35" />-->
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <h6 class="mb-1">{{ $page.props.auth.user.name }} 🖖</h6>
                                                <span>{{ $page.props.auth.user.email }}</span>
                                            </div>
                                        </div>
                                        <hr class="border-secondary border-opacity-50" />
                                        <p class="text-span">Manage</p>
                                        <Link :href="route('profile.edit')" class="dropdown-item">
                                          <span>
                                            <svg class="pc-icon text-muted me-2">
                                              <use xlink:href="#custom-user"></use>
                                            </svg>
                                            <span>My Account</span>
                                          </span>
                                        </Link>
                                        <hr class="border-secondary border-opacity-50" />
                                        <div class="d-grid mb-3">
                                            <Link :href="route('logout')" method="post" class="btn btn-iconic">
                                                <svg class="pc-icon me-2">
                                                    <use xlink:href="#custom-logout-1-outline"></use></svg
                                                >Logout
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </li>
                    </ul>
                </div>
            </div>
        </header>
        <div class="pc-container">
            <div class="pc-content">
                <!-- [ breadcrumb ] start -->
                <div class="page-header">
                    <div class="page-block">
                        <div class="row align-items-center">
                            <div class="col-md-12">
                                <ul class="breadcrumb">
                                    <li class="breadcrumb-item">
                                        <Link :href="route('dashboard.index')">
                                            <slot name="home">Home</slot>
                                        </Link>
                                    </li>
                                    <li class="breadcrumb-item">
                                        <a href="javascript: void(0)"></a>
                                    </li>
                                    <li class="breadcrumb-item" aria-current="page"></li>
                                </ul>
                            </div>
                            <div class="col-md-12" v-if="$slots.pageTitle">
                                <div class="page-header-title">
                                    <h2 class="mb-0">
                                        <slot name="pageTitle"></slot>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- [ breadcrumb ] end -->

                <!-- [ Main Content ] start -->
               <slot />
                <!-- [ Main Content ] end -->
            </div>
        </div>
    </div>

</template>

<style scoped>
.header-left {
    transform: translateX(-100%);
    transition: transform 0.3s ease;
}

.header-full {
    width: 100vw;
}
</style>
