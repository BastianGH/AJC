<template>
  <div>
    <ul>
      <li v-for="car in cars" :key="car.brand">
        <span>{{ car.brand }}</span
        >: {{ car.model }}
      </li>
    </ul>
    <hr />
    <button @click="updateCar">Update from children</button>
  </div>
</template>

<script setup>
//const props = defineProps(['cars'])
import { inject } from "vue";

const { cars, updateCar } = inject("cars");
</script>
