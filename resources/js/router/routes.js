/**
 * This is where we will add our client routes
 * 
 * To know about vue router, please see this link
 * https://router.vuejs.org/guide/#javascript
 */


import Welcome from '~/pages/welcome'
import Login from '~/pages/auth/login'
import Dashboard from '~/pages/dashboard/index'

export default [
    { path: '/', name: 'welcome', component: Welcome },

    // auth routes
    { path: '/login', name: 'login', component: Login },
    { path: '/dashboard', name: 'dashboard', component: Dashboard }
]