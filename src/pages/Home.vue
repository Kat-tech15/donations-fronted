<template>
  <div class="home">
    <div class="main-container">
    <!-- Navigation Bar -->
    <nav class="navbar">
      <h1 class="logo">Donation Management</h1>
      <ul class="nav-links">
        <li><router-link to="/" exact-active-class="active-link">Home</router-link></li>
        <li><router-link to="/about" exact-active-class="active-link">About</router-link></li>
        <li><router-link to="/services" exact-active-class="active-link">Services</router-link></li>
        <li><router-link to="/contact" exact-active-class="active-link">Contact</router-link></li>
      </ul>
    </nav>

    <!-- Hero Section -->
    <header class="hero">
      <div class="overlay"></div>
      <h2 class="hero-text">Welcome to  <span style="color: darkviolet;">Katwai's</span> <br> Donation Organization</h2>
    </header>

    <!-- About Section -->
    <section id="about" class="section">
      <h2 class="section-title">About Us</h2>
      <p class="section-text">
        We connect donors with those in need, ensuring donations reach the right beneficiaries.
      </p>
    </section>

    <!-- Services Section -->
    <section id="services" class="section section-alt">
      <h2 class="section-title">Our Services</h2>
      <div class="services-grid">
        <div class="service-box">✔ Secure Donation Processing</div>
        <div class="service-box">✔ Beneficiary Application System</div>
        <div class="service-box">✔ Testimonial Sharing</div>
        <div class="service-box">✔ Logistics & Distribution Tracking</div>
      </div>
    </section>

    <!-- Donate & Apply Section -->
    <section id="donate-apply" class="section">
      <h2 class="section-title">Make a Difference</h2>
      <div class="cta-buttons">
        <router-link to="/donate" class="cta-button donate">Donate Here</router-link>
        <router-link to="/apply" class="cta-button apply">Apply Now</router-link>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="section">
      <h2 class="section-title">Testimonials</h2>
      <div class="testimonials">
        <blockquote>"This platform changed lives!" - Jane Doe</blockquote>
        <blockquote>"Seamless donations and great impact!" - John Smith</blockquote>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section section-alt">
      <h2 class="section-title">Contact Us</h2>
      <p class="section-text">
        Email: <a href="mailto:contact@donation.com" class="contact-link">contact@donation.com</a>
      </p>
      <p class="section-text">Phone: +254 112 871 337</p>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <p>© 2025 Donation Management. All rights reserved.</p>
    </footer>
  </div>

  </div>
  
</template>

<style scoped>
.home{
  margin:0;
  padding: 0;
  overflow: auto;
}
.main-container {
  background-color: #f5f5f5;
  font-family: Arial, sans-serif;
}

.navbar {
  background-color: #047857;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: 0.3s;
}

.nav-links a:hover,
.active-link {
  text-decoration: underline;
  font-weight: bold;
}

.hero {
  background-image: url('src/assets/background.jpg');
  background-size: cover;
  background-position: center;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: white;
}

.overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.hero-text {
  position: relative;
  font-size: 2.5rem;
  font-weight: bold;
}

.section {
  padding: 4rem 2rem;
  text-align: center;
  background-color: white;
}

.section-alt {
  background-color: #e5e7eb;
}

.section-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1.5rem;
}

.cta-button {
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 20px;
  text-decoration: none;
  color: white;
}

.donate {
  background-color: rgb(34, 150, 24);
}
.donate:hover{
background-color: #33d6d6 ;
}

.apply {
  background-color: #5367c0;
}
.apply:hover{
  background-color: rgb(240, 70, 203);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.service-box {
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-weight: 600;
}

.testimonials blockquote {
  font-style: italic;
  color: #6b7280;
  margin: 0.5rem 0;
}

.contact-link {
  color: #047857;
  text-decoration: none;
  font-weight: bold;
}

.contact-link:hover {
  text-decoration: underline;
}

.footer {
  background-color: #047857;
  color: white;
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
}
</style>
