<template>
  <div id="app">
    <nav>
      <li><a href="Home">Home</a></li>
      <li><a href="login">Log in</a></li>
      <li><a href="signup">Sign up</a></li>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  text-decoration: none;
  gap: 80px;
  padding: 10px 5px;
  list-style-type: none;
  background: #29e248;
  border-radius: 8px;
  color: blue;
}
html{
  scroll-behavior: smooth;
}
</style>
