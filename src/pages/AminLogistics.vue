// src/pages/AdminLogistics.vue
<template>
  <div>
    <h2 class="text-2xl font-bold">Logistics & Distribution Tracking</h2>
    
    <!-- Google Map for Drop-Off Locations -->
    <div class="mt-4 h-96 w-full" id="map"></div>
    
    <!-- Pickup Request Form -->
    <div class="mt-6 p-4 bg-white shadow-md rounded">
      <h3 class="text-xl font-bold">Schedule Pickup</h3>
      <form @submit.prevent="schedulePickup">
        <input v-model="pickup.name" type="text" placeholder="Your Name" class="border p-2 w-full mb-2" required />
        <input v-model="pickup.address" type="text" placeholder="Pickup Address" class="border p-2 w-full mb-2" required />
        <input v-model="pickup.date" type="date" class="border p-2 w-full mb-2" required />
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Request Pickup</button>
      </form>
    </div>
    
    <!-- Tracking Input -->
    <div class="mt-6 p-4 bg-white shadow-md rounded">
      <h3 class="text-xl font-bold">Track Donation</h3>
      <input v-model="trackId" type="text" placeholder="Enter Tracking ID" class="border p-2 w-full mb-2" />
      <button @click="trackDelivery" class="bg-green-500 text-white px-4 py-2 rounded">Track</button>
      <p v-if="trackingStatus" class="mt-2">Status: {{ trackingStatus }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      dropOffLocations: [],
      pickup: {
        name: '',
        address: '',
        date: ''
      },
      trackId: '',
      trackingStatus: ''
    };
  },
  mounted() {
    this.loadDropOffLocations();
  },
  methods: {
    loadDropOffLocations() {
      axios.get('/logistics/locations')
        .then(response => {
          this.dropOffLocations = response.data;
          this.initMap();
        })
        .catch(error => console.error('Error loading locations:', error));
    },
    initMap() {
      const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -1.286389, lng: 36.817223 },
        zoom: 10
      });
      this.dropOffLocations.forEach(location => {
        new google.maps.Marker({
          position: { lat: location.latitude, lng: location.longitude },
          map
        });
      });
    },
    schedulePickup() {
      axios.post('/logistics/schedule_pickup', this.pickup)
        .then(() => alert('Pickup scheduled successfully!'))
        .catch(error => console.error('Error scheduling pickup:', error));
    },
    trackDelivery() {
      axios.get(`/logistics/track/${this.trackId}`)
        .then(response => {
          this.trackingStatus = response.data.status;
        })
        .catch(error => console.error('Error tracking delivery:', error));
    }
  }
};
</script>

<style scoped>
#map {
  height: 400px;
  width: 100%;
}
</style>
