<template>
  <div class="login">
    <h2>Login Here</h2>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit" :disabled="loading">
        {{ loading ? "Logging in..." : "Login" }}
      </button>
    </form>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    <p v-if="successMessage" class="success">{{ successMessage }}</p>
  </div>
</template>

<script>
import api from "@/services/api";

export default {
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
      successMessage: "",
      loading: false,
    };
  },
  methods: {
    async login() {
      this.errorMessage = "";
      this.successMessage = "";
      this.loading = true;

      try {
        // Send login request to backend
        const response = await api.post("users/login/", {
          email: this.email,
          password: this.password,
        });

        if (response.status === 200) {
          // Store token in localStorage
          localStorage.setItem("token", response.data.token);
          
          // Show success message
          this.successMessage = "Login successful! Redirecting...";

          // Redirect to dashboard
          setTimeout(() => {
            this.$router.push("/dashboard");
          }, 1000);
        }
      } catch (error) {
        if (error.response) {
          if (error.response.status === 401) {
            this.errorMessage = "Invalid email or password.";
          } else {
            this.errorMessage = "Login failed. Please try again.";
          }
        } else {
          this.errorMessage = "Network error. Please check your connection.";
        }
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.login {
  max-width: 400px;
  margin: 50px auto;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: rgb(25, 214, 25);
  border-radius: 8px;
  padding: 2rem;
}
.login input {
  padding: 9px;
  margin-top: 15px;
  border-radius: 5px;
  display: block;
  background-color: white;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
.login input:hover {
  background-color: rgb(155, 209, 216);
}
.login form {
  max-width: 400px;
  border-radius: 15px;
  padding: 0;
}
.login button {
  border-radius: 10px;
  background-color: rgb(228, 113, 193);
  color: white;
  font-size: medium;
  font-weight: bold;
  transition: 0.5s;
  margin-top: 10px;
  margin-bottom: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.login button:disabled {
  background-color: grey;
  cursor: not-allowed;
}
.login button:hover {
  background-color: rgb(24, 163, 66);
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
