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

        <label for="payment-method">Select Payment Method:</label>
        <select id="payment-method" v-model="donation.paymentMethod" required>
          <option value="" disabled>Select Payment Method</option>
          <option value="paypal">PayPal</option>
          <option value="mpesa">M-pesa</option>
          <option value="stripe">Stripe</option>
        </select>
        <button type="submit" class="btn">Donate</button>
      </form>
      <div v-if="paymentMethod === 'paypal'" id="paypal-button-container"></div>
      <div v-if="paymentMethod === 'mpesa'">
        <!-- Implement M-Pesa payment logic here -->
        <button @click="initiateMpesaPayment">Pay with M-Pesa</button>
    </div>
  </div>
  </template>
  
  <script>
  import api from "@/services/api";

  export default {
  data() {
    return {
      donation: {
        name: '',
        email: '',
        amount: '',
      },
      paymentMethod: '',
    };
  },
  methods: {
    submitDonation() {
      if (this.donation.amount > 0 && this.donation.paymentMethod) {
        if (this.donation.paymentMethod === 'paypal') {
          this.renderPayPalButton();
        } else if (this.donation.paymentMethod === 'mpesa') {
          
        }
        // Add more payment method conditions as needed
      } else {
        alert('Please enter a valid donation amount and select a payment method.');
      }
    },
    renderPayPalButton() {
      if (window.paypal) {
        window.paypal.Buttons({
          style: {
            layout: 'vertical',
            color: 'gold',
            shape: 'rect',
            label: 'donate',
          },
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: (this.donation.amount / 100).toFixed(2), // Convert KES to USD
                  currency_code: 'USD',
                },
              }],
            });
          },
          onApprove: (data, actions) => {
            return actions.order.capture().then(details => {
              alert('Donation successful! Thank you, ' + details.payer.name.given_name);
              // Handle post-donation actions (e.g., update database)
            });
          },
          onError: err => {
            console.error('PayPal error', err);
            alert('An error occurred during the donation process.');
          },
        }).render('#paypal-button-container');
      } else {
        console.error('PayPal SDK not loaded.');
      }
    },
    initiateMpesaPayment() {
      alert('M-pesa payment process initiated. Implement API intergration here.');
    }
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
  input, select {
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
  