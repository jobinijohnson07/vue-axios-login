import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from "../src/views/About.vue"
import Activity from "../src/views/activity.vue"

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About,

        },
        {
            path: '/activity',
            name: 'activity',
            component: Activity
        }

    ]
})


export default router;