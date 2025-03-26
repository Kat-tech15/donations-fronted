<template>
    <div class="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 class="text-lg font-semibold text-center mb-4">Schedule Donation Pickup</h2>
      
      <form @submit.prevent="schedulePickup">
        <div class="mb-4">
          <label class="block font-medium">Donation ID</label>
          <input v-model="pickupData.donation" type="text" class="border p-2 w-full rounded">
        </div>
  
        <div class="mb-4">
          <label class="block font-medium">Pickup Location ID</label>
          <input v-model="pickupData.pickup_location" type="text" class="border p-2 w-full rounded">
        </div>
  
        <div class="mb-4">
          <label class="block font-medium">Drop-off Location ID</label>
          <input
          ut v-model="pickupData.dropoff_location" type="text" class="border p-2 w-full rounded">
        </div>
  
        <div class="mb-4">
          <label class="block font-medium">Scheduled Pickup Time</label>
          <input v-model="pickupData.scheduled_pickup_time" type="datetime-local" class="border p-2 w-full rounded">
        </div>
  
        <button type="submit" class="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Schedule Pickup
        </button>
      </form>
  
      <p v-if="message" class="mt-4 text-green-600">{{ message }}</p>
      <p v-if="errorMessage" class="mt-4 text-red-600">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import api from "@api";
  
  export default {
    data() {
      return {
        pickupData: {
          donation: "",
          pickup_location: "",
          dropoff_location: "",
          scheduled_pickup_time: "",
        },
        message: "",
        errorMessage: "",
      };
    },
    methods: {
      async schedulePickup() {
        try {
          const response = await axios.post("/logistics/schedule_pickup/", this.pickupData, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
          });
  
          this.message = response.data.message;
          this.errorMessage = "";
        } catch (error) {
          this.errorMessage = error.response?.data?.error || "An error occurred.";
          this.message = "";
        }
      },
    },
  };
  </script>
  
  <style scoped>
  input {
    border: 1px solid #ccc;
  }
  </style>
  