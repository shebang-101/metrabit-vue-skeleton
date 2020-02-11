import Vue from 'vue'
import VueRouter from 'vue-router'
import VueBodyClass from 'vue-body-class'

import store from '../store'
import SignIn from '../pages/SignIn'
import MainSlot from '../components/layout/MainSlot'

import dashboardRoutes from './dashboard'

Vue.use(VueRouter)

const routes = [
    {
        path: '/signin',
        name: 'SignIn',
        component: SignIn,
        meta: {
            requiresAuth: false,
            bodyClass: 'hold-transition login-page'
        }
    },
    {
        path: '/',
        component: MainSlot,
        children: [
            ...dashboardRoutes
        ],
        redirect: { name: 'Dashboard' },
        meta: {
            requiresAuth: true,
        }
    }
]

const vueBodyClass = new VueBodyClass(routes)
const router = new VueRouter({
    mode: 'history',
    routes: routes
})

router.beforeEach((to, from, next) => {
    let token = store.getters['auth/jwtDecoded'] || null
    let authorized = token && token.exp > Date.now() / 1000

    if (authorized) {
        if (to.matched.some(record => !record.meta.requiresAuth)) {
            next({ name: 'Dashboard' })
        }
    } else {
        if (to.matched.some(record => record.meta.requiresAuth)) {
            next({ name: 'SignIn' })
        }
    }

    vueBodyClass.guard(to, next)

    next()
})

export default router