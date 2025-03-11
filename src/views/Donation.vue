<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 class="text-2xl font-semibold mb-4 text-center">Make a Donation</h2>
        <form @submit.prevent="submitDonation">
          <!-- Select Donation Type -->
          <label class="block mb-2 text-sm font-medium">Select Donation Type</label>
          <select v-model="donationType" class="w-full p-2 border rounded mb-4">
            <option value="money">Money</option>
            <option value="books">Books</option>
            <option value="clothes">Clothes</option>
          </select>
  
          <!-- Amount Input (Only for Money Donations) -->
          <div v-if="donationType === 'money'">
            <label class="block mb-2 text-sm font-medium">Amount (KES/USD)</label>
            <input v-model="amount" type="number" class="w-full p-2 border rounded mb-4" required />
          </div>
  
          <!-- Payment Method (Only for Money Donations) -->
          <div v-if="donationType === 'money'">
            <label class="block mb-2 text-sm font-medium">Select Payment Method</label>
            <select v-model="paymentMethod" class="w-full p-2 border rounded mb-4">
              <option value="mpesa">M-Pesa</option>
              <option value="paypal">PayPal</option>
              <option value="stripe">Stripe</option>
            </select>
          </div>
  
          <!-- Other Donations Description -->
          <div v-if="donationType !== 'money'">
            <label class="block mb-2 text-sm font-medium">Donation Details</label>
            <textarea v-model="donationDetails" class="w-full p-2 border rounded mb-4" required></textarea>
          </div>
  
          <button type="submit" class="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
            Donate Now
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        donationType: "money",
        amount: "",
        paymentMethod: "mpesa",
        donationDetails: ""
      };
    },
    methods: {
      submitDonation() {
        // Handle donation submission (send to API)
        console.log("Donation submitted:", {
          type: this.donationType,
          amount: this.amount,
          paymentMethod: this.paymentMethod,
          details: this.donationDetails
        });
        alert("Donation submitted successfully!");
      }
    }
  };
  </script>
  
  <style scoped>
    /* Add custom styles if needed */
  </style>
  
