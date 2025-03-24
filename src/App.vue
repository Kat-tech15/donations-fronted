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
  gap: 60px;
  padding: 10px;
  background: #c483b6;
}
html{
  scroll-behavior: smooth;
}
</style>
