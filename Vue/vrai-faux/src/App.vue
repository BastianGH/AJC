<template>
  <Header />
  <div class="bg-secondary-subtle py-5" id="container">
    <div class="container w-50 d-flex justify-content-center">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Header from "./components/template/header.vue";
</script>

<style>
#container {
  min-height: 100vh;
}
</style>
