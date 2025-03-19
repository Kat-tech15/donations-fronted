<template>
    <div class="register-container">
      <h1 class="text-2xl font-bold mb-4">Register</h1>
  
      <form @submit.prevent="registerUser" class="space-y-4">
        <div>
          <label class="block font-semibold">Full Name</label>
          <input type="text" v-model="fullName" class="input" required />
        </div>
  
        <div>
          <label class="block font-semibold">Email</label>
          <input type="email" v-model="email" class="input" required />
        </div>
  
        <div>
          <label class="block font-semibold">Password</label>
          <input type="password" v-model="password" class="input" required />
        </div>
  
        <div>
          <label class="block font-semibold">Confirm Password</label>
          <input type="password" v-model="confirmPassword" class="input" required />
        </div>
  
        <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded">Register</button>
      </form>
  
      <p class="mt-4">
        Already have an account? 
        <router-link to="/login" class="text-blue-500">Login here</router-link>
      </p>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      };
    },
    methods: {
      async registerUser() {
        if (this.password !== this.confirmPassword) {
          alert("Passwords do not match!");
          return;
        }
  
        try {
          const response = await axios.post("http://localhost:8000/api/auth/register", {
            full_name: this.fullName,
            email: this.email,
            password: this.password,
          });
  
          alert("Registration successful! Please login.");
          this.$router.push("/login");
        } catch (error) {
          console.error("Registration failed:", error);
          alert("Registration failed. Please try again.");
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-top: 4px;
  }
  </style>
  