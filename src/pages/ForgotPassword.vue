<template>
    <v-container class="fill-height d-flex align-center justify-center">
      <v-card class="pa-6" elevation="5" max-width="400">
        <v-card-title class="text-h5 text-center">Forgot Password</v-card-title>
        <v-card-subtitle class="text-center">
          Enter your email to reset your password.
        </v-card-subtitle>
  
        <v-form @submit.prevent="submitForm">
          <v-text-field
            v-model="email"
            label="Email"
            type="email"
            required
            :rules="[rules.required, rules.email]"
          ></v-text-field>
  
          <v-btn type="submit" color="primary" block :loading="loading">
            Reset Password
          </v-btn>
        </v-form>
  
        <v-alert v-if="message" :type="alertType" class="mt-4">
          {{ message }}
        </v-alert>
  
        <v-card-actions class="justify-center mt-2">
          <router-link to="/login">Back to Login</router-link>
        </v-card-actions>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: "",
        loading: false,
        message: "",
        alertType: "info",
        rules: {
          required: (value) => !!value || "Field is required.",
          email: (value) =>
            /\S+@\S+\.\S+/.test(value) || "Invalid email address.",
        },
      };
    },
    methods: {
      async submitForm() {
        if (!this.email) {
          this.message = "Please enter your email.";
          this.alertType = "error";
          return;
        }
  
        this.loading = true;
        this.message = "";
  
        try {
          // Simulate API call (replace with actual API request)
          await new Promise((resolve) => setTimeout(resolve, 2000));
  
          this.message = "Password reset link sent to your email.";
          this.alertType = "success";
        } catch (error) {
          this.message = "Failed to send reset link. Try again later.";
          this.alertType = "error";
        } finally {
          this.loading = false;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .v-container {
    min-height: 100vh;
  }
  </style>
  