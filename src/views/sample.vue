<template>
    <div>



        <nav class="navbar navbar-default navbar-static-top">
            <div class="navbar-header">

                <!-- Collapsed Hamburger -->
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse"
                    aria-expanded="false">
                    <span class="sr-only">Toggle Navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>

                <!-- Branding Image -->
                <a class="navbar-brand" href="#">
                    <!-- <img src="{{ asset('img/logo_brand.png') }}" /> -->
                    <b>geechs</b> job
                </a>
            </div>

            <div class="collapse navbar-collapse" id="app-navbar-collapse">
                <!-- Right Side Of Navbar -->
                <ul class="nav navbar-nav navbar-right" style="margin: initial;">
                    <!-- Authentication Links -->
                    <li>
                        <a href="#">
                            <button class="btn btn-primary btn-sm mr-2" type="text" placeholder="Search">Start working
                                time</button>
                        </a>
                    </li>
                    <li><a href="#"> <img id="prof_img" src="../../src/assets/echo.jpg" class="rounded-circle" alt="">
                        </a></li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"
                            aria-haspopup="true">
                            <span class="caret"></span>
                        </a>

                        <ul class="dropdown-menu">
                            <li><a href="#">IT Profile</a></li>
                            <li>

                                <a href="#">
                                    Logout
                                </a>

                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>




        <notification-modal ref="notification-modal" />
        <notifications group="foo" position="bottom right" />
        <sign-in @logged="userLoggedIn" ref="sign-in-modal" v-if="!user || signedIn" />
    </div>
</template>

<script>
    import {
        mapGetters
    } from 'vuex'
    import LocaleDropdown from '~/components/LocaleDropdown'
    import NotificationModal from '~/components/NotificationModal'
    import axios from 'axios'
    import Vue from 'vue'
    import Notifications from 'vue-notification'
    import SignIn from './components/sign-in'

    Vue.use(Notifications)
    export default {
        components: {
            LocaleDropdown,
            NotificationModal,
            SignIn,
        },

        data: () => ({
            appName: window.config.appName,
            public_path: location.origin,
            notifications_count: 0,
            signedIn: false
        }),

        computed: mapGetters({
            user: 'auth/user'
        }),

        methods: {
            showNotifications() {
                var $this = this;
                axios({
                    method: 'patch',
                    url: '/api/notification/update/mark_read_all'
                }).then((data) => {
                    if (data.data == 'success') {
                        $this.notifications_count = 0;
                    }
                });
                this.$refs['notification-modal'].show();
            },
            async fetchNotificationCount() {
                const {
                    data
                } = await axios({
                    method: 'get',
                    url: '/api/notification/fetch/unread/count',
                    params: {},
                });

                this.notifications_count = data;
            },
            async logout() {
                // Log out the user.
                await this.$store.dispatch('auth/logout')

                // Redirect to login.
                this.$router.push({
                    name: 'login'
                })
            },
            async loadNotification(id) {
                const {
                    data
                } = await axios({
                    method: 'get',
                    url: '/api/notification/fetch/one',
                    params: {
                        notification_id: id
                    }
                });

                this.$refs['notification-modal'].notifications.unshift(data.notification);

                this.$notify({
                    group: 'foo',
                    title: data.notification.title,
                    text: data.notification.message,
                    animation: {
                        enter: {
                            'margin-right': ['-100', 0],
                            opacity: [1, 0]
                        },
                        leave: {
                            opacity: [0, 1]
                        }
                    }
                })
            },
            showSignPopup() {
                this.$refs['sign-in-modal'].show()
            },
            userLoggedIn() {
                this.signedIn = true;
            }
        },
        created: function () {
            this.fetchNotificationCount();
            var $this = this;
            Echo.private('App.User.' + jQuery('meta[name="auth_id"]').prop('content'))
                .notification((notification) => {
                    $this.notifications_count++
                    $this.loadNotification(notification.id)
                });
        }
    }
</script>

<style scoped>
    .profile-photo {
        width: 2rem;
        height: 2rem;
        margin: -.375rem 0;
    }
</style>