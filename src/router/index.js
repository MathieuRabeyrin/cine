import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/',
        name: 'LandingPageView',
        component: () => import('../views/LandingPageView.vue')
    },
    {
      path: '/registration',
      name: 'RegistrationPageView',
      component: () => import('../views/RegistrationPageView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router