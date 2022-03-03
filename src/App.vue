<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// Import Swiper styles
import 'swiper/css'
// Import Swiper styles
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
</script>

<template>
  <h1 class="text-3xl font-bold underline">Example</h1>
  <!--router link-->
  <router-link to="/gallery">gallery</router-link>
  <router-link to="/form-contact">form-contact</router-link>
  <router-link to="/slider">slider</router-link>
  <router-link to="/change-data-form">change-data-form</router-link>
  <router-link to="/beae-element">beae-element</router-link>

  <!--router-view-->
  <hr class="m-6" />
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
