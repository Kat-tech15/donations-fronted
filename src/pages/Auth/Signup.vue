<template>
    <div class="signup">
      <h2>Sign Up here</h2>
      <form @submit.prevent="register">
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <input v-model="password" type="password" placeholder="confirm-password">
        <button type="submit">Sign Up</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      register() {
        console.log('Signing up with', this.email, this.password);
      }
    }
  };
  </script>
  
  <style scoped>
  .signup {
    text-align: center;
    margin-top: 20px;
    background-color: rgb(90, 194, 80);
    margin-bottom: 50px;
    border-radius: 10px;
  }
  .signup input{
    padding: 9px;
    margin-top: 15px;
    border-radius: 5px;
    display: flex;
    background-color: rgb(208, 218, 216);
  }
  .signup input:hover{
    background-color: rgb(24, 180, 201);
  }
  .signup form{
    height: 220px;
    width: auto;
    border-radius: 15px;
    background-color: rgb(199, 199, 218);
  }
  .signup button{
    border-radius: 10px;
    background-color: rgb(228, 113, 193);
    color: whitesmoke;
    font-size: medium;
    font-weight: bold;
    transition: 0.5s;
    margin-top: 10px;
    margin-bottom: 5px;
  }
  .signup button:hover{
    background-color: rgb(130, 129, 197);
  }
  </style>
  