import { createRouter, createWebHistory } from 'vue-router';
import Login from './views/Login.vue';
import Signup from './views/Signup.vue';
import ForgotPassword from './views/ForgotPassword.vue';
import VerifyOTP from './views/VerifyOTP.vue';
import Home from './views/Home.vue';
import Donation from './views/Donation.vue';
import AdminLayout from './layouts/AdminLayout.vue';
import AdminAnalytics from './pages/AdminAnalytics.vue';
import AdminApplications from './pages/AdminApplications.vue';
import AdminDonations from './pages/AdminDonations.vue';
import AdminUsers from './pages/AdminUsers.vue';
import AminLogistics from './pages/AminLogistics.vue';
import Testimonials from './pages/Testimonials.vue';


const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },
    { path: '/forgot-password', component: ForgotPassword },
    { path: '/verify-otp', component: VerifyOTP },
    { path: '/donate', component: Donation },
    { path: '/donations', component: Donations},
    { path: '/beneficiaries', component:Beneficiaries},
    { path: '/admin', component:AdminDas},
    { path: '/admin/logistics', component:AdminLogistics},
    {
        path: '/Admin',
        component: AdminLayout,
        children: [
            { path: 'users', component: AdminUsers},
            { path: 'donations', component:AdminDonations},
            { path: 'applications', component:AdminApplications},
            { path: 'analytics', component:AdminAnalytics}
        ],
    },
];
   

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;