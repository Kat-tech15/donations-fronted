import { createRouter, createWebHistory } from 'vue-router';
//import Login from './pages/Login.vue';

import ForgotPassword from './pages/ForgotPassword.vue';
import VerifyOTP from './pages/VerifyOTP.vue';
import Home from './pages/Home.vue';
import Donations from './pages/Donations.vue';
import Beneficiaries from './pages/Beneficiaries.vue'
import Testimonials from './pages/Testimonials.vue';
import ApplyForm from './pages/ApplyForm.vue'
import DonateForm from './pages/DonateForm.vue';
import About from './pages/About.vue';
import Services from './pages/Services.vue';
import Contacts from './pages/Contacts.vue';
import DanationPage from './pages/DonationPage.vue';

import Dashboard from  './User/Dashboard.vue';

import AdminLayout from './layouts/AdminLayout.vue'; 

import SchedulePickup from './components/SchedulePickup.vue';

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
import DonationPage from './pages/DonationPage.vue';

const routes = [
    { path: '/',name:'Home', component: Home },
    { path: '/about',name:'About', component: About },
    { path: '/services',name:'Services', component: Services },
    { path: '/contacts',name:'Contacts', component: Contacts },
    { path: '/donationpage', name:'DonationPage', component: DonationPage},
    { path: '/login',name:'Login', component: Login },
    { path: '/register',name:'Register', component:Register },
    { path: '/signup',name:'Signup', component: Signup },
    { path: '/adminlayout', name:'AdminLayout',component:AdminLayout },
    { path: '/schedule-pickup', name:'SchedulePickup', component:SchedulePickup },
    { path: '/testimonials', name:'Testimonials', component:Testimonials },
    { path: '/:pathMatch(.*)*', redirect:'/'},
    { path: '/forgot-password',name:'ForgotPassword', component: ForgotPassword },
    { path: '/verify-otp',name:'VerifyOTP', component: VerifyOTP },
    { path: '/donations',name:'Donations', component: Donations},
    { path: '/beneficiaries',name:'Beneficiaries', component:Beneficiaries},
    { path: '/donate', name:'Donate', component:DonateForm },
    { path: '/apply',name:'Apply', component:ApplyForm},
    {
      path: '/dashboard',
      component: Dashboard,
      meta:{ requiresAuth:true },
    },
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
    const isAuthenticated = !!localStorage.getItem('token'); // Check if user is logged in
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