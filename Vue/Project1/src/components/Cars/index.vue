<template>
  <div>
    <h1>Welcome to cars</h1>
    <hr />
    <!-- <CarList :cars="cars" /> -->
    <CarList />
  </div>
</template>

<script setup>
import CarList from "@/components/Cars/list.vue";
const props = defineProps(["cars"]);
</script>
