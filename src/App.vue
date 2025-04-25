<template>
  <div id="app">
    <nav>
      <ul>
        <li><a href="Home">Home</a></li>
        <li><a href="login">Log in</a></li>
        <li><a href="signup">Sign up</a></li>
        <li><a href="About">About</a></li>
        <li><a href="Services">Services</a></li>
        <li><a href="Contacts">Contacts</a></li>
      </ul>
    </nav>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>


<style scoped>
/* Reset default margin and padding for all elements */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}

/* Ensure html and body take full height */
html, body {
  height: 100%;
  scroll-behavior: smooth;
}

/* Style for the navigation bar */
nav {
  position: fixed; /* Fixes the navbar at the top */
  top: 0;
  left: 0;
  width: 100%;
  background: #29e248;
  border-radius: 8px;
  padding: 10px 0;
  z-index: 1000; /* Ensures the navbar stays above other content */
}

/* Flex container for the navigation links */
nav ul {
  display: flex;
  justify-content: center;
  list-style-type: none;
  gap: 80px;
  padding: 0;
  margin: 0;
}

/* Style for the navigation links */
nav a {
  color: blue;
  text-decoration: none; /* Removes the underline from links */
  font-size: 16px;
  padding: 5px 10px;
  font-weight: bold;
}

/* Optional: Add hover effect for better user experience */
nav a:hover {
  background-color: rgb(200, 202, 45);
  border-radius: 8px;
}

/* Content area to prevent overlap with the fixed navbar */
.content {
  padding-top: 60px; /* Adjust this value based on the navbar's height */
}
</style>
