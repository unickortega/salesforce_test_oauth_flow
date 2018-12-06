/**
 * This is where we will add our client routes
 * 
 * To know about vue router, please see this link
 * https://router.vuejs.org/guide/#javascript
 */


import Welcome from '~/pages/welcome'
import Home from '~/pages/home'
import Login from '~/pages/auth/login'
import Register from '~/pages/auth/register'
import PasswordReset from '~/pages/auth/password/reset'
import PasswordForgot from '~/pages/auth/password/email'
import Dashboard from '~/pages/dashboard/index'

export default [
    { path: '/', name: 'welcome', component: Welcome },
    { path: '/home', name: 'home', component: Home },

    // auth routes
    { path: '/login', name: 'login', component: Login },
    { path: '/register', name: 'register', component: Register },
    { path: '/dashboard', name: 'dashboard', component: Dashboard },
    { path: '/password/reset/:token', name: 'password.reset', component: PasswordReset },
    { path: '/password/forgot', name: 'password.forgot', component: PasswordForgot }
]