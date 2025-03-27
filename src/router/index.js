import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Login from '../pages/Auth/Login.vue';
import Signup from '../pages/Auth/Signup.vue';
import AdminDashboard from '../pages/Admin/AdminDashboard.vue';
import store from '../store';
//import { components } from 'daisyui/imports';


const routes =  [
    { path: '/', component:Home},
    { path: '/login', component:Login},
    { path: '/signup', componenet:Signup},
    { 
        path: '/admindashboard',
        component: AdminDashboard,
        meta: { requiresAuth: true },
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: () => import("../pages/Dashboard.vue"),
        meta: { requiresAuth: true }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const isAuthenticated = !!localStorage.getItem('token');
    if (to.meta.requiresAuth && !isAuthenticated) {
        next('/login');
    }else{
        next();
    }
});

export default  router;