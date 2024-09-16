<template>
  <div>
    <app-header />
    <div class="container">
      <UserRegister />
    </div>
  </div>
</template>

<script setup>
import UserRegister from "@/components/user/register.vue";
</script>

<style scoped>
body {
  padding: 0;
  margin: 0;
  font-family: "Roboto", sans-serif;
}
.container {
  min-height: 84vh;
  box-sizing: border-box;
  padding: 20px;
}
</style>
