<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
</script>

<template>
  <h1 class="text-3xl font-bold underline">Example</h1>
  <button></button>
  <!--router link-->
  <router-link to="/gallery">gallery</router-link>
  <router-link to="/form-contact">form-contact</router-link>
  <router-link to="/slider">slider</router-link>
  <router-link to="/beae-collection">beae-collection</router-link>
  <router-link to="/liquid-admin">liquid-admin</router-link>

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
