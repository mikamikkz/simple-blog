import { createRouter, createWebHistory } from 'vue-router'
import AuthPage from '@/views/AuthPage.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'auth',
            component: AuthPage,
            props: {
                type: 'auth',
            },
        },
        {
            path: '/login',
            name: 'login',
            component: AuthPage,
            props: {
                type: 'login',
            },
        },
        {
            path: '/signup',
            name: 'signup',
            component: AuthPage,
            props: {
                type: 'signup',
            },
        },
        {
            path: '/profile',
            name: 'profile',
            component: () => import('@/views/ProfilePage.vue'),
        },
    ],
})

export default router
