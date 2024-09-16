<template>
  <div>
    <div v-if="city">
      <h2>{{ city.name }}</h2>
      <p>Pays: {{ city.country }}</p>
      <!-- image externe (depuis dépôt github -->
      <!-- <img :src="base_url + '/' + city.image" :alt="city.name" /> -->

      <!-- image interne (assets) -->
      <img :src="getImageUrl(city.image)" :alt="city.name" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  city: Object,
});

const base_url =
  "https://raw.githubusercontent.com/cdufour/F-240610-DIS-399-DEV_FRONT_END/main/vuejs/exos/citychoice/cities";

function getImageUrl(name) {
  return new URL(`../../../assets/cities/${name}`, import.meta.url).href;
}
</script>

<style scoped>
img {
  width: 400px;
}
</style>
