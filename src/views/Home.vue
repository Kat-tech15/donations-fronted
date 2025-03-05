<template>
  <div>
    <!-- Navigation Bar -->
    <nav class="bg-green-600 text-white p-4 flex justify-between">
      <h1 class="text-xl font-bold">Donation Management</h1>
      <ul class="flex space-x-4">
        <li><router-link to="/" class="hover:underline">Home</router-link></li>
        <li><router-link to="/about" class="hover:underline">About</router-link></li>
        <li><router-link to="/services" class="hover:underline">Services</router-link></li>
        <li><router-link to="/contact" class="hover:underline">Contact</router-link></li>
      </ul>
    </nav>

    <!-- Hero Section -->
    <header class="bg-cover bg-center h-96 flex items-center justify-center" style="background-image: url('/path-to-your-image.jpg');">
      <h2 class="text-white text-4xl font-bold">Welcome to Donation Management</h2>
    </header>

    <!-- About Section -->
    <section id="about" class="p-8">
      <h2 class="text-2xl font-bold">About Us</h2>
      <p>We connect donors with those in need, ensuring donations reach the right beneficiaries.</p>
    </section>

    <!-- Services Section -->
    <section id="services" class="p-8 bg-gray-100">
      <h2 class="text-2xl font-bold">Our Services</h2>
      <ul>
        <li>✔ Secure Donation Processing</li>
        <li>✔ Beneficiary Application System</li>
        <li>✔ Testimonial Sharing</li>
        <li>✔ Logistics & Distribution Tracking</li>
      </ul>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="p-8">
      <h2 class="text-2xl font-bold">Contact Us</h2>
      <p>Email: contact@donation.com</p>
      <p>Phone: +254 112 871 337</p>
    </section>

    <!-- Footer -->
    <footer class="bg-green-600 text-white text-center p-4">
      <p>© 2025 Donation Management. All rights reserved.</p>
    </footer>
  </div>
</template>

<style scoped>
/* Add more styles if needed */
</style>
