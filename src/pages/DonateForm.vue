<template>
    <div class="form-container">
      <h2 class="form-title">Donate Now</h2>
      <form @submit.prevent="submitDonation">
        <label for="name">Full Name:</label>
        <input type="text" id="name" v-model="donation.name" required />
  
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="donation.email" required />
  
        <label for="amount">Donation Amount (KES):</label>
        <input type="number" id="amount" v-model="donation.amount" required />
  
        <button type="submit" class="btn">Donate</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        donation: {
          name: "",
          email: "",
          amount: "",
        },
      };
    },
    methods: {
      submitDonation() {
        console.log("Donation Submitted:", this.donation);
        alert("Thank you for your donation!");
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
  }
  
  label {
    display: block;
    margin: 0.5rem 0 0.2rem;
    font-weight:500;
  }
  
  input {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 6px;
  }
  
  .btn {
    background-color: #4465d1;
    color: white;
    padding: 0.75rem;
    border: none;
    border-radius: 10px;
    font-weight: bold;
    cursor: pointer;
  }
  
  .btn:hover {
    background-color: #2dbb21;
  }
  </style>
  