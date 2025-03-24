<template>
    <div class="donation-page">
      <h1>Make a Donation</h1>
      <!-- Monetary Donation Form -->
      <section class="donation-section">
        <h2>Monetary Donation</h2>
        <form @submit.prevent="handleMonetaryDonation">
          <label for="amount">Amount:</label>
          <input type="number" v-model="monetaryAmount" required />
  
          <label for="payment-method">Payment Method:</label>
          <select v-model="paymentMethod" required>
            <option value="mpesa">M-Pesa</option>
            <option value="paypal">PayPal</option>
          </select>
  
          <button type="submit">Donate</button>
        </form>
  
        <!-- M-Pesa Payment Integration -->
        <div v-if="paymentMethod === 'mpesa'">
          <!-- Implement M-Pesa payment logic here -->
          <button @click="initiateMpesaPayment">Pay with M-Pesa</button>
        </div>
  
        <!-- PayPal Payment Integration -->
        <div v-if="paymentMethod === 'paypal'" id="paypal-button-container"></div>
      </section>
  
      <!-- Material Donation Form -->
      <section class="donation-section">
        <h2>Material Donation</h2>
        <form @submit.prevent="handleMaterialDonation" enctype="multipart/form-data">
          <label for="item-description">Item Description:</label>
          <textarea v-model="itemDescription" required></textarea>
  
          <label for="item-image">Upload Image:</label>
          <input type="file" @change="handleFileUpload" required />
  
          <button type="submit">Donate Item</button>
        </form>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        monetaryAmount: '',
        paymentMethod: 'mpesa',
        itemDescription: '',
        itemImage: null,
      };
    },
    methods: {
      handleMonetaryDonation() {
        // Handle monetary donation form submission
        if (this.paymentMethod === 'mpesa') {
          this.initiateMpesaPayment();
        } else if (this.paymentMethod === 'paypal') {
          // PayPal payment is handled by the PayPal button
        }
      },
      initiateMpesaPayment() {
        // Implement M-Pesa payment initiation logic here
        // This may involve calling your backend API to process the payment
      },
      handleMaterialDonation() {
        // Handle material donation form submission
        const formData = new FormData();
        formData.append('description', this.itemDescription);
        formData.append('image', this.itemImage);
  
        // Send formData to your backend API to process the material donation
      },
      handleFileUpload(event) {
        this.itemImage = event.target.files[0];
      },
    },
    mounted() {
      // Load the PayPal script
      const script = document.createElement('script');
      script.src = 'https://www.paypal.com/sdk/js?client-id=YOUR_PAYPAL_CLIENT_ID';
      script.onload = this.renderPayPalButton;
      document.body.appendChild(script);
    },
    methods: {
      renderPayPalButton() {
        paypal.Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: this.monetaryAmount,
                },
              }],
            });
          },
          onApprove: (data, actions) => {
            return actions.order.capture().then(details => {
              alert('Transaction completed by ' + details.payer.name.given_name);
              // Optionally, send the transaction details to your server
            });
          },
        }).render('#paypal-button-container');
      },
    },
  };
  </script>
  
  <style scoped>
  .donation-page {
    max-width: 600px;
    margin: 10px auto;
    padding: 20px;
    border-radius: 16px;
    background-color: aqua;
    color: green;
  }
  
  .donation-section {
    margin-bottom: 40px;
    
  }
  
  label {
    display: block;
    margin-top: 10px;
    color: green;
  }
  
  input,
  textarea,
  select {
    width: 100%;
    border-radius: 8px;
    padding: 8px;
    margin-top: 5px;
    background-color: white;
  }
  input:hover{
    background-color: rgb(230, 161, 137);
  }
  
  button {
    margin-top: 15px;
    padding: 10px 15px;
    border-radius: 15px;
    background-color: #4a53d3;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: fuchsia ;
  }
  </style>
  