<template>
    <div class="admin-testimonials">
      <h1 class="text-2xl font-bold mb-4">Admin - Manage Testimonials</h1>
  
      <!-- Testimonials Table -->
      <table class="w-full border-collapse border border-gray-300">
        <thead>
          <tr class="bg-gray-200">
            <th class="border p-2">User</th>
            <th class="border p-2">Testimonial</th>
            <th class="border p-2">Status</th>
            <th class="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="testimonial in testimonials" :key="testimonial.id" class="hover:bg-gray-100">
            <td class="border p-2">{{ testimonial.user }}</td>
            <td class="border p-2">{{ testimonial.message }}</td>
            <td class="border p-2">
              <span :class="{
                'text-green-600': testimonial.status === 'approved',
                'text-yellow-600': testimonial.status === 'pending'
              }">
                {{ testimonial.status }}
              </span>
            </td>
            <td class="border p-2">
              <button
                v-if="testimonial.status === 'pending'"
                @click="approveTestimonial(testimonial.id)"
                class="bg-green-500 text-white px-3 py-1 rounded mr-2"
              >
                Approve
              </button>
              <button
                @click="deleteTestimonial(testimonial.id)"
                class="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        testimonials: [],
      };
    },
    methods: {
      // Fetch testimonials from the backend
      async fetchTestimonials() {
        try {
          const response = await axios.get("http://localhost:8000/api/testimonials");
          this.testimonials = response.data;
        } catch (error) {
          console.error("Error fetching testimonials:", error);
        }
      },
  
      // Approve a testimonial
      async approveTestimonial(id) {
        try {
          await axios.post(`http://localhost:8000/api/testimonials/approve/${id}`);
          this.testimonials = this.testimonials.map(t =>
            t.id === id ? { ...t, status: "approved" } : t
          );
        } catch (error) {
          console.error("Error approving testimonial:", error);
        }
      },
  
      // Delete a testimonial
      async deleteTestimonial(id) {
        if (confirm("Are you sure you want to delete this testimonial?")) {
          try {
            await axios.delete(`http://localhost:8000/api/testimonials/${id}`);
            this.testimonials = this.testimonials.filter(t => t.id !== id);
          } catch (error) {
            console.error("Error deleting testimonial:", error);
          }
        }
      },
    },
    mounted() {
      this.fetchTestimonials();
    },
  };
  </script>
  
  <style scoped>
  button {
    transition: 0.3s;
  }
  button:hover {
    opacity: 0.8;
  }
  </style>
  