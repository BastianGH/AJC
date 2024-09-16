<template>
  <div>
    <button @click="begin" class="btn btn-primary">Jouer</button>
  </div>
</template>

<script setup>
import usePlayStore from "../game/play";

const playStore = usePlayStore();
const begin = () => (playStore.play = true);
</script>
