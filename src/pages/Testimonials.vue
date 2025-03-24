// src/pages/Testimonials.vue
<template>
  <div class="container">
    <h2 class="text-2xl font-bold">Testimonials & Impact Metrics</h2>
    
    <!-- Impact Metrics -->
    <div class="mt-4 p-4 bg-white shadow-md rounded">
      <h3 class="text-xl font-bold">Impact Statistics</h3>
      <p>Total Donations: {{ impactStats.totalDonations }}</p>
      <p>Success Stories: {{ impactStats.successStories }}</p>
    </div>
    
    <!-- Testimonials List -->
    <div class="mt-6">
      <h3 class="text-xl font-bold">User Testimonials</h3>
      <ul>
        <li v-for="testimonial in testimonials" :key="testimonial.id" class="p-2 border-b">
          <p><strong>{{ testimonial.name }}</strong>: {{ testimonial.message }}</p>
        </li>
      </ul>
    </div>
    
    <!-- Submit Testimonial Form -->
    <div class="test">
      <h3 >Submit a Testimonial</h3>
      <form @submit.prevent="submitTestimonial">
        <input v-model="newTestimonial.name" type="text" placeholder="Your Name" class="border p-2 w-full mb-2" required />
        <textarea v-model="newTestimonial.message" placeholder="Your Testimonial" class="border p-2 w-full mb-2" required></textarea>
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      impactStats: {
        totalDonations: 0,
        successStories: 0
      },
      testimonials: [],
      newTestimonial: {
        name: '',
        message: ''
      }
    };
  },
  mounted() {
    this.fetchImpactStats();
    this.fetchTestimonials();
  },
  methods: {
    fetchImpactStats() {
      // Placeholder API call for impact statistics
      axios.get('/impact/stats')
        .then(response => {
          this.impactStats = response.data;
        })
        .catch(error => console.error('Error fetching impact stats:', error));
    },
    fetchTestimonials() {
      axios.get('/testimonials')
        .then(response => {
          this.testimonials = response.data;
        })
        .catch(error => console.error('Error fetching testimonials:', error));
    },
    submitTestimonial() {
      axios.post('/testimonials/submit', this.newTestimonial)
        .then(() => {
          alert('Testimonial submitted successfully!');
          this.fetchTestimonials();
          this.newTestimonial.name = '';
          this.newTestimonial.message = '';
        })
        .catch(error => console.error('Error submitting testimonial:', error));
    }
  }
};
</script>

<style scoped>
.container{
  background-color: aqua;
  border-radius: 8px;
  margin-top: 10px;
  color: green;
  padding: 10px 15px;
}
.test input,
textarea{
  background-color: rgb(143, 134, 151);
  border-radius: 8px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
</style>
