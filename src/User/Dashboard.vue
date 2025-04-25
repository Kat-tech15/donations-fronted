<template>
    <div class="dashboard">
      <h2>Welcome, {{ user.username }}</h2>
      <p>Email: {{ user.email }}</p>
      <button @click="logout">Logout</button>
    </div>
  </template>
  
  <script>
  import api from "@/services/api";
  
  export default {
    data() {
      return {
        user: {},
      };
    },
    async created() {
      try {
        const response = await api.getUser("me"); // Fetch user details
        this.user = response.data;
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    },
    methods: {
      logout() {
        api.logout();
        this.$router.push("/login");
      },
    },
  };
  </script>
  
  <style scoped>
  .dashboard {
    max-width: 500px;
    margin: 50px auto;
    padding: 20px;
    text-align: center;
    background-color:rgb(8, 183, 214);
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  button {
    margin-top: 10px;
    padding: 10px;
    background-color: #ff4d4d;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background-color: #ff3333;
  }
  </style>
  