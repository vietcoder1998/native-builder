<script setup lang="ts">
/* import font awesome icon component */
</script>

<template>
  <!--router link-->
  <div>
    <button></button>
  </div>
  <router-link to="/">Home</router-link>
  <router-link to="/gallery">gallery</router-link>
  <router-link to="/form-contact">form-contact</router-link>
  <router-link to="/slider">slider</router-link>
  <router-link to="/form-admin">form-admin</router-link>
  <router-link to="/beae-collection">beae-collection</router-link>

  <!--router-view-->
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

a {
  text-decoration: underline;
  margin-right: 1rem;
}
</style>
