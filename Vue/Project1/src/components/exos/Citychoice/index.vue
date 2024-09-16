<template>
  <div>
    <select @change="onChange">
      <option value="">Votre destination</option>
      <option v-for="city in cities" :key="city.name" :value="city.name">
        {{ city.name }}
      </option>
    </select>

    <!-- todo: gérer la présélection par rapport au v-mode -->
    <!--
        <select v-model="selectedCityBis">
            <option v-for="city in cities" :key="city.name">
                {{ city.name }}
            </option>
        </select>
        <p>{{ selectedCityBis.name }}</p>
        -->
    <!-- ------------------------------------------->

    <hr />
    <Citycard :city="selectedCity" />
  </div>
</template>

<script setup>
import Citycard from "@/components/exos/Citychoice/card.vue";
import { reactive, ref } from "vue";

const cities = [
  { name: "Turin", country: "Italie", image: "turin.jpg" },
  { name: "Paris", country: "France", image: "paris.jpg" },
  { name: "Rio", country: "Brésil", image: "rio.jpg" },
];

//let selectedCity = ref(cities[0]);
let selectedCity = ref(null);

//let selectedCityBis = ref(cities[0]);

const onChange = (e) => {
  let cityName = e.target.value;

  if (cityName != "") {
    //selectedCity = cities.filter(city => city.name === cityName)[0];
    // autre approche:
    let result = cities.find((city) => city.name === cityName);
    console.log(result);
    //selectedCity.name = result.name;
    selectedCity.value = result;
    //selectedCity.value.name = result.name
  } else {
    selectedCity.value = null;
  }
};
</script>
