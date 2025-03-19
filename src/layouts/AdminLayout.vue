// src/layouts/AdminLayout.vue
<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <aside class="w-64 bg-white shadow-md p-4">
      <nav>
        <ul>
          <li v-for="item in menuItems" :key="item.route" class="py-2">
            <router-link :to="item.route" class="block px-4 py-2 rounded hover:bg-gray-200">
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </nav>
    </aside>
    
    <!-- Main Content -->
    <div class="flex-1 flex flex-col">
      <header class="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 class="text-xl font-bold">Admin Dashboard</h1>
        <button @click="logout" class="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
      </header>
      <main class="p-4 flex-1 overflow-auto">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { name: 'Users', route: '/admin/users' },
        { name: 'Donations', route: '/admin/donations' },
        { name: 'Applications', route: '/admin/applications' },
        { name: 'Analytics', route: '/admin/analytics' }
      ]
    };
  },
  methods: {
    logout() {
      // Handle logout logic
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
/* Additional styling if needed */
</style>
