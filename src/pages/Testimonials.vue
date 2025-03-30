<template>
  <div class="testimonials-container">
    <h2 class="title">Testimonials & Impact Metrics</h2>

    <!-- Impact Metrics -->
    <section class="impact-metrics">
      <h3>Impact Statistics</h3>
      <p>Total Donations: {{ impactStats.totalDonations }}</p>
      <p>Success Stories: {{ impactStats.successStories }}</p>
    </section>

    <!-- Testimonials List -->
    <section class="testimonials-list">
      <h3>User Testimonials</h3>
      <ul>
        <li v-for="testimonial in testimonials" :key="testimonial.id" class="testimonial-item">
          <p><strong>{{ testimonial.name }}</strong>: {{ testimonial.message }}</p>
        </li>
      </ul>
    </section>

    <!-- Submit Testimonial Form -->
    <section class="submit-testimonial">
      <h3>Submit a Testimonial</h3>
      <form @submit.prevent="submitTestimonial">
        <input v-model="newTestimonial.name" type="text" placeholder="Your Name" class="input-field" required />
        <textarea v-model="newTestimonial.message" placeholder="Your Testimonial" class="textarea-field" required></textarea>
        <button type="submit" class="submit-button">Submit</button>
      </form>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      impactStats: {
        totalDonations: 0,
        successStories: 0,
      },
      testimonials: [],
      newTestimonial: {
        name: '',
        message: '',
      },
    };
  },
  mounted() {
    this.fetchImpactStats();
    this.fetchTestimonials();
  },
  methods: {
    fetchImpactStats() {
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
    },
  },
};
</script>

<style scoped>
/* Container styling */
.testimonials-container {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f0f8ff; /* Light blue background */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  color: #333;
}

/* Title styling */
.title {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}

/* Section styling */
.impact-metrics, .testimonials-list, .submit-testimonial {
  margin-bottom: 20px;
}

/* Testimonials list styling */
.testimonial-item {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

/* Form styling */
.input-field, .textarea-field {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.textarea-field {
  height: 100px;
}

.submit-button {
  background-color: #007bff; /* Blue background */
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #0056b3; /* Darker blue */
}

/* Responsive design */
@media (max-width: 768px) {
  .testimonials-container {
    padding: 15px;
  }

  .title {
    font-size: 1.5rem;
  }
}
</style>
