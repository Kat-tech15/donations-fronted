<template>
    <div class="contacts">
      <section class="section">
        <h2 class="section-title">Contact Us</h2>
        <form @submit.prevent="submitForm" class="contacts-form">
          <label for="name" >Name:</label>
          <input type="text" id="name" placeholder="Enter your name" v-model="formData.name" required>
  
          <label for="email" >Email:</label>
          <input type="email" id="email" placeholder="Enter your email" v-model="formData.email" required>
  
          <label for="message" >Message:</label>
          <textarea id="message" placeholder="Enter your message Here..." v-model="formData.message" required rows="5"></textarea>
  
          <button type="submit" class="submit-btn">Submit Message</button>
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
        alert("Message submitted successfully!");
        this.formData = { name: "", email: "", message: "" };
      },
    },
  };
  </script>
  
  <style scoped>
  .contacts {
    text-align: left;
    background-color: rgb(187, 235, 243);
    padding: 4rem 2rem;
    color: #308a35;
  }
  .section-title {
    text-align: center;
    font-size: 2rem;
    color: hotpink;
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
    background-color: white;
    border-radius: 5px;
    font-size: 1rem;
  }
  .submit-btn {
    background-color: #0bf016;
    color: white;
    padding: 0.75rem;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    border: none;
  }
  .submit-btn:hover {
    background-color: darkviolet;
  }
  </style>
  