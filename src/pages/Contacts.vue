<template>
    <div class="contacts">
      <section class="section">
        <h2 class="section-title">Contact Us</h2>
        <form @submit.prevent="submitForm" class="contacts-form">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="formData.name" required>
  
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="formData.email" required>
  
          <label for="message">Message:</label>
          <textarea id="message" v-model="formData.message" required></textarea>
  
          <button type="submit" class="submit-btn">Send Message</button>
        </form>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: "Contacts",
    data() {
      return {
        formData: {
          name: "",
          email: "",
          message: "",
        },
      };
    },
    methods: {
      submitForm() {
        console.log("Form submitted:", this.formData);
        alert("Message sent successfully!");
        this.formData = { name: "", email: "", message: "" };
      },
    },
  };
  </script>
  
  <style scoped>
  .contacts {
    text-align: center;
    background-color: white;
    padding: 4rem 2rem;
  }
  .section-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }
  .contacts-form {
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  input,
  textarea {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
  }
  .submit-btn {
    background-color: #047857;
    color: white;
    padding: 1rem;
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    border: none;
  }
  .submit-btn:hover {
    background-color: darkviolet;
  }
  </style>
  