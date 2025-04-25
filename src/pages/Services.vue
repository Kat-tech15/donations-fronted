<template>
    <div class="services">
      <section class="section">
        <h2 class="section-title">Our Services</h2>
        <div class="services-grid">
          <div class="service-box">✔ Secure Donation Processing</div>
          <div class="service-box">✔ Beneficiary Application System</div>
          <div class="service-box">✔ Testimonial Sharing</div>
          <div class="service-box">✔ Logistics & Distribution Tracking</div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: "Services",
  };
  </script>
  
  <style scoped>
  .services {
    margin: 0;
    text-align: center;
    padding: 0;
  }
  .section-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }
  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    max-width: 800px;
    margin: 0 auto;
  }
  .service-box {
    background-color: white;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    font-weight: 600;
  }
  </style>
  