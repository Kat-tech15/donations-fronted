<template>
    <div class="form-container">
      <h2 class="form-title">Apply for Donation</h2>
      <form @submit.prevent="submitApplication">
        <label for="name">Full Name:</label>
        <input type="text" id="name" v-model="application.name" required />
  
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="application.email" required />
  
        <label for="reason">Reason for Applying:</label>
        <textarea id="reason" v-model="application.reason" required></textarea>
  
        <button type="submit" class="btn">Submit Application</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        application: {
          name: "",
          email: "",
          reason: "",
        },
      };
    },
    methods: {
      submitApplication() {
        console.log("Application Submitted:", this.application);
        alert("Your application has been received!");
      },
    },
  };
  </script>
  
  <style scoped>
  .form-container {
    max-width: 400px;
    margin: 50px auto;
    padding: 2rem;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .form-title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: Green;
  }
  
  label {
    display: block;
    margin: 0.5rem 0 0.2rem;
    font-weight: 500;
  }
  
  input, textarea {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 6px;
  }
  
  textarea {
    height: 100px;
  }
  
  .btn {
    background-color: #047857;
    color: white;
    padding: 0.75rem;
    border: none;
    border-radius: 10px;
    font-weight: bold;
    cursor: pointer;
  }
  
  .btn:hover {
    background-color: #17c450;
  }
  </style>
  