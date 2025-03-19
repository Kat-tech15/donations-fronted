<template>
    <div class="login-form">
      <div class="">
        <h2 class="">Login</h2>
        <form @submit.prevent="handleLogin">
          <div class="mb-4">
            <label class="">Email</label>
            <input type="email" v-model="email" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          </div>
          <div class="mb-4">
            <label class="">Password</label>
            <input type="password" v-model="password" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          </div>
          <button type="submit" class="">Login</button>
          <p class="mt-4 text-center text-sm">
            Don't have an account? <router-link to="/signup" class="text-blue-500">Sign up</router-link>
          </p>
        </form>
      </div>
    </div>
  </template>

  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      async handleLogin() {
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/auth/login/', {
            email: this.email,
            password: this.password
          });
          console.log('Login Successful', response.data);
          localStorage.setItem('token', response.data.access);
          this.$router.push('/');
        } catch (error) {
          console.error('Login Failed', error.response.data);
          alert('Invalid Credentials');
        }
      }
    }
  };
  </script>
  <style>
  .login-form{
    background-color: magenta;
    height:350px;
    width: auto;
    border-radius: 2pc;
  }
  .login-form h2{
    color: rgb(17, 13, 13);
    text-align: center;
    margin-top: 20px;
  }
  .mb-4 input{
    border-radius: 2pc;
    background-color: rgb(187, 149, 149);
    margin-top: 20px;
    padding: 5px;
  }
  .mb-4 input:hover{
    background-color: rgb(92, 177, 177);
  }
  .login-form button{
    background-color: rgb(66, 55, 214);
    border-radius: 2pc;
    margin-top: 15px;
  }
  .login-form button:hover{
    background-color: rgb(53, 223, 67);
  }
</style>
  