import { createRouter, createWebHistory } from 'vue-router';
//import Login from './pages/Login.vue';

import ForgotPassword from './pages/ForgotPassword.vue';
import VerifyOTP from './pages/VerifyOTP.vue';
import Home from './pages/Home.vue';
import Donation from './pages/Donation.vue';
import Beneficiaries from './pages/Beneficiaries.vue'
import Testimonials from './pages/Testimonials.vue';

import AdminLayout from './layouts/AdminLayout.vue'; 

import AdminDashboard from './pages/Admin/AdminDashboard.vue';
import AdminAnalytics from './pages/Admin/AdminAnalytics.vue';
import AdminApplications from './pages/Admin/AdminApplications.vue';
import AdminDonations from './pages/Admin/AdminDonations.vue';
import AdminUsers from './pages/Admin/AdminUsers.vue';
import AdminLogistics from './pages/Admin/AdminLogistics.vue';
import AdminTestimonials from './pages/Admin/AdminTestimonials.vue';

import Login from './pages/Auth/Login.vue';
import Signup from './pages/Auth/Signup.vue';
import Register from './pages/Auth/Register.vue';

const routes = [
    { path: '/',name:'Home', component: Home },
    { path: '/login',name:'Login', component: Login },
    { path: '/signup',name:'Signup', component: Signup },
    { path: '/:pathMatch(.*)*', redirect:'/'},
    { path: '/forgot-password',name:'ForgotPassword', component: ForgotPassword },
    { path: '/verify-otp',name:'VerifyOTP', component: VerifyOTP },
    { path: '/donation',name:'Donation', component: Donation},
    { path: '/beneficiaries',name:'Beneficiaries', component:Beneficiaries},
    {
        path: '/admin',
    component: AdminDashboard, 
    meta: { requiresAuth: true, requiresAdmin: true },
    children: [
      { path: 'analytics', name: 'AdminAnalytics', component: AdminAnalytics },
      { path: 'applications', name: 'AdminApplications', component: AdminApplications },
      { path: 'donations', name: 'AdminDonations', component: AdminDonations },
      { path: 'users', name: 'AdminUsers', component: AdminUsers },
      { path: 'logistics', name: 'AdminLogistics', component: AdminLogistics },
      { path: 'testimonials', name: 'AdminTestimonials', component: AdminTestimonials },
    ],
  },
];
   

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem('token'); // Check if user is logged in
    const isAdmin = localStorage.getItem('role') === 'admin'; // Check if user is admin
  
    if (to.meta.requiresAuth && !isAuthenticated) {
      next('/login'); // Redirect to login if not authenticated
    } else if (to.meta.requiresAdmin && !isAdmin) {
      next('/'); // Redirect to home if not admin
    } else {
      next();
    }
  });

export default router;