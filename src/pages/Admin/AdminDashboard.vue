<template>
    <div class="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <nav>
        <router-link to="/admin/analytics">Analytics</router-link> |
        <router-link to="/admin/applications">Applications</router-link> |
        <router-link to="/admin/donations">Donations</router-link> |
        <router-link to="/admin/users">Users</router-link> |
        <router-link to="/admin/logistics">Logistics</router-link> |
        <router-link to="/admin/testimonials">Testimonials</router-link>
      </nav>
      <router-view />
    </div>
  </template>
  
  <style scoped>
  nav {
    margin-bottom: 20px;
  }
  nav a {
    margin-right: 10px;
    text-decoration: none;
    color: blue;
  }
  </style>
  