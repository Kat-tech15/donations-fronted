<template>
  <div class="container">
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
  
        <button type="submit" >Register</button>
      </form>
  
      <p class="mt-4">
        Already have an account? 
        <router-link to="/login" class="text-blue-500">Login here</router-link>
      </p>
  </div>
      
  </template>
  
  <script>
  import axios from "axios";
  import api from "@/services/api";

  
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
  .container{
    background-color: rgb(233, 217, 217);
    max-width: 400px;
    border-radius: 8px;
    margin-top: 2px;
    color: green;
    
  }
  label{
    color: rgb(15, 17, 15);
    font-weight: 500;
  }
  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #f5ecec;
    border-radius: 8px;
    background-color: white;
    margin-top: 4px;
  }
  input:hover{
    background-color: rgb(232, 241, 248);
  }
  button{
    background-color: blue;
    margin-top: 15px;
    border-radius: 10px;
    color: white;
    padding: 5px 10px;
    cursor: pointer;
    transition: 0.s;
  }
  button:hover{
    background-color: rgb(13, 192, 28);
  }

  </style>
  