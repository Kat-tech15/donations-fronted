<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 class="text-2xl font-bold text-center text-gray-800">Verify OTP</h2>
        <p class="text-sm text-gray-600 text-center mb-4">
          Enter the OTP sent to your email or phone.
        </p>
        
        <form @submit.prevent="verifyOtp">
          <div class="mb-4">
            <label for="otp" class="block text-sm font-medium text-gray-700">OTP Code</label>
            <input 
              type="text" 
              id="otp" 
              v-model="otp" 
              class="mt-1 block w-full px-4 py-2 border rounded-lg focus:ring focus:ring-green-300"
              placeholder="Enter OTP"
              required
            />
          </div>
  
          <button 
            type="submit" 
            class="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
          >
            Verify OTP
          </button>
        </form>
  
        <p v-if="errorMessage" class="text-red-500 text-sm mt-2 text-center">
          {{ errorMessage }}
        </p>
        
        <p class="text-sm text-gray-600 mt-4 text-center">
          Didn't receive the OTP? 
          <button @click="resendOtp" class="text-green-600 hover:underline">Resend</button>
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "VerifyOTP",
    data() {
      return {
        otp: "",
        errorMessage: "",
      };
    },
    methods: {
      verifyOtp() {
        if (this.otp.length !== 6) {
          this.errorMessage = "Invalid OTP. Please enter a 6-digit code.";
          return;
        }
        // Call API to verify OTP
        console.log("Verifying OTP:", this.otp);
        // Redirect user upon success
      },
      resendOtp() {
        console.log("Resending OTP...");
        // Call API to resend OTP
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add custom styles if needed */
  </style>
  