import { createRouter, createWebHistory } from 'vue-router';
import Login from './views/Login.vue';
//import Register from './views/Register.vue'
import Signup from './views/Signup.vue';
import ForgotPassword from './views/ForgotPassword.vue';
import VerifyOTP from './views/VerifyOTP.vue';
import Home from './views/Home.vue';
import Donation from '.views/Donation.vue';


const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    //{ path: '/register', component: Register },
    { path: '/signup', component: Signup },
    { path: '/forgot-password', component: ForgotPassword },
    { path: '/verify-otp', component: VerifyOTP },
    { path: '/donate', component:Donation },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;