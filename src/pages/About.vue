<template>
    <div class="about">
      <section class="section">
        <h2 class="section-title">About Us</h2>
        <p class="section-text">
          At <span class="highlight">Katwai's Donation Organization</span>, we bridge the gap between donors and those in need. Our mission is to ensure that every contribution reaches the right beneficiaries, making a real impact in their lives.
        </p>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: "About",
  };
  </script>
  
  <style scoped>
  .about {
    text-align: center;
    max-width: 100%;
    padding: 0;
  }
  .section-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  .section-text {
    font-size: 1.2rem;
    max-width: 100%;
    margin: 0 auto;
  }
  .highlight {
    color: darkviolet;
    font-weight: bold;
  }
  </style>
  