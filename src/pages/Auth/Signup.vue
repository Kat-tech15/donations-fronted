<template>
  <div class="signup">
    <h2>Sign Up Here</h2>
    <form @submit.prevent="register">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <input v-model="confirmPassword" type="password" placeholder="Confirm Password" required />
      <button type="submit">Sign Up</button>
    </form>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    <p v-if="successMessage" class="success">{{ successMessage }}</p>
  </div>
</template>

<script>
import axios from 'axios';
import api from "@/services/api";


export default {
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      errorMessage: '',
      successMessage: ''
    };
  },
  methods: {
    async register() {
      // Reset messages
      this.errorMessage = '';
      this.successMessage = '';

      // Basic validation
      if (this.password !== this.confirmPassword) {
        this.errorMessage = 'Passwords do not match.';
        return;
      }

      try {
        // Replace with your backend API endpoint
        const response = await axios.post('https://your-backend-api/signup', {
          email: this.email,
          password: this.password
        });

        if (response.status === 201) {
          this.successMessage = 'Registration successful! You can now log in.';
          // Optionally, redirect to the login page
          // this.$router.push('/login');
        } else {
          this.errorMessage = 'An error occurred during registration. Please try again.';
        }
      } catch (error) {
        if (error.response && error.response.status === 409) {
          this.errorMessage = 'An account with this email already exists.';
        } else {
          this.errorMessage = 'An error occurred during registration. Please try again.';
        }
      }
    }
  }
};
</script>

<style scoped>
.signup {
  max-width: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-top: 20px;
  background-color: rgb(90, 194, 80);
  margin: 50px auto;
  border-radius: 8px;
  padding: 2rem;
}
.signup input {
  padding: 9px;
  margin-top: 15px;
  border-radius: 5px;
  display: block;
  background-color: white;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
.signup input:hover {
  background-color: rgb(60, 212, 187);
}
.signup form {
  height: auto;
  width: auto;
  border-radius: 15px;
  padding: 20px;
}
.signup button {
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
.signup button:hover {
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
