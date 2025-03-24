<template>
  <div class="donations-container">
    <h2>Donations Received</h2>
    <ul v-if="donations.length">
      <li v-for="donation in donations" :key="donation.id">
        <strong>{{ donation.name }}</strong> donated 
        <span class="amount">KES {{ donation.amount }}</span>
        <span class="date">({{ formatDate(donation.date) }})</span>
      </li>
    </ul>
    <p v-else>No donations yet.</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      donations: [],
    };
  },
  methods: {
    async fetchDonations() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/donations/");
        this.donations = response.data;
      } catch (error) {
        console.error("Error fetching donations:", error);
      }
    },
    formatDate(date) {
      return new Date(date).toLocaleDateString();
    },
  },
  mounted() {
    this.fetchDonations();
  },
};
</script>

<style scoped>
.donations-container {
  max-width: 600px;
  margin: 20px auto;
  padding: 1rem;
  background: rgb(135, 183, 192);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 0.5rem;
  border-bottom: 1px solid #ddd;
}

.amount {
  font-weight: bold;
  color: green;
}

.date {
  font-size: 0.9rem;
  color: gray;
}
</style>
