<template>
  <div class="login">
    <h2>Login Here</h2>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    <p v-if="successMessage" class="success">{{ successMessage }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      errorMessage: '',
      successMessage: ''
    };
  },
  methods: {
    async login() {
      // Reset messages
      this.errorMessage = '';
      this.successMessage = '';

      try {
        // Replace with your backend API endpoint
        const response = await axios.post('https://your-backend-api/login', {
          email: this.email,
          password: this.password
        });

        if (response.status === 200) {
          this.successMessage = 'Login successful!';
          // Optionally, redirect to the dashboard or another page
          // this.$router.push('/dashboard');
        } else {
          this.errorMessage = 'Invalid email or password.';
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.errorMessage = 'Invalid email or password.';
        } else {
          this.errorMessage = 'An error occurred during login. Please try again.';
        }
      }
    }
  }
};
</script>

<style scoped>
.login {
  text-align: center;
  margin-top: 20px;
  background-color: rgb(90, 194, 80);
  margin-bottom: 50px;
  border-radius: 10px;
  padding: 20px;
}
.login input {
  padding: 9px;
  margin-top: 15px;
  border-radius: 5px;
  display: block;
  background-color: rgb(208, 218, 216);
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
.login input:hover {
  background-color: rgb(24, 180, 201);
}
.login form {
  height: auto;
  width: auto;
  border-radius: 15px;
  background-color: rgb(199, 199, 218);
  padding: 20px;
}
.login button {
  border-radius: 10px;
  background-color: rgb(228, 113, 193);
  color: whitesmoke;
  font-size: medium;
  font-weight: bold;
  transition: 0.5s;
  margin-top: 10px;
  margin-bottom: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.login button:hover {
  background-color: rgb(130, 129, 197);
}
.error {
  color: red;
  margin-top: 10px;
}
.success {
  color: green;
  margin-top: 10px;
}
</style>
