<template>
  <Game v-if="play" />
  <Result v-if="!play" />
</template>

<script setup>
import Game from "./game.vue";
import Result from "./result.vue";

import { computed } from "vue";
import usePlayStore from "@/components/game/play";

const playStore = usePlayStore();
const play = computed(() => playStore.play);
</script>
