<template>
    <div class="dashboard-layout">
      <!-- Sidebar -->
      <aside class="sidebar">
        <h2>Admin Dashboard</h2>
        <ul>
          <li><router-link to="/dashboard/users">Manage Users</router-link></li>
          <li><router-link to="/dashboard/donations">Manage Donations</router-link></li>
          <li><router-link to="/dashboard/applications">Manage Applications</router-link></li>
        </ul>
      </aside>
  
      <!-- Main Content -->
      <main class="main-content">
        <router-view></router-view>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DashboardLayout',
  };
  </script>
  
  <style scoped>
  .dashboard-layout {
    display: flex;
    min-height: 100vh;
  }
  
  .sidebar {
    width: 250px;
    background-color: #2c3e50;
    color: white;
    padding: 20px;
  }
  
  .sidebar h2 {
    margin-bottom: 20px;
  }
  
  .sidebar ul {
    list-style: none;
    padding: 0;
  }
  
  .sidebar ul li {
    margin: 15px 0;
  }
  
  .sidebar ul li a {
    color: white;
    text-decoration: none;
  }
  
  .sidebar ul li a:hover {
    text-decoration: underline;
  }
  
  .main-content {
    flex-grow: 1;
    padding: 20px;
    background-color: #f4f4f4;
  }
  </style>