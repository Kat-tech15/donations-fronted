<template>
    <div class="donation-container">
      <h2>Make a Donation</h2>
      <form @submit.prevent="processDonation">
        <!-- Select Donation Type -->
        <label for="donationType">Select Donation Type:</label>
        <select id="donationType" v-model="donationType" @change="checkPaymentRequired">
          <option value="" disabled>Select an option</option>
          <option value="money">Money</option>
          <option value="books">Books</option>
          <option value="clothes">Clothes</option>
        </select>
  
        <!-- Payment Fields (Only for Money Donations) -->
        <div v-if="donationType === 'money'">
          <label for="amount">Amount (KES):</label>
          <input type="number" id="amount" v-model="amount" placeholder="Enter amount" required />
  
          <label for="paymentMethod">Payment Method:</label>
          <select id="paymentMethod" v-model="paymentMethod">
            <option value="" disabled>Select Payment Method</option>
            <option value="mpesa">M-Pesa</option>
            <option value="paypal">PayPal</option>
            <option value="stripe">Stripe</option>
          </select>
        </div>
  
        <!-- Submit Button -->
        <button type="submit">Donate Now</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        donationType: '',
        amount: '',
        paymentMethod: ''
      }
    },
    methods: {
      checkPaymentRequired() {
        if (this.donationType !== 'money') {
          this.amount = '';
          this.paymentMethod = '';
        }
      },
      processDonation() {
        if (this.donationType === 'money' && (!this.amount || !this.paymentMethod)) {
          alert('Please fill in all payment details.');
          return;
        }
  
        // Simulate donation processing (replace with API call later)
        alert(`Thank you for your ${this.donationType} donation!`);
        
        // Reset form after submission
        this.donationType = '';
        this.amount = '';
        this.paymentMethod = '';
      }
    }
  }
  </script>
  
  <style scoped>
  .donation-container {
    max-width: 500px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  
  h2 {
    text-align: center;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  label {
    margin-top: 10px;
    font-weight: bold;
  }
  
  input, select {
    margin-top: 5px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    margin-top: 15px;
    padding: 10px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #369f6c;
  }
  </style>
  