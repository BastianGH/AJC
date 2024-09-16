<script setup>
const props = defineProps(["lastname", "age"]);
const firstname = "Chris";
</script>

<template>
  <div>
    <p>Prénom: {{ firstname }}</p>
    <p>Nom: {{ lastname }} ({{ age }} ans)</p>
  </div>
</template>
