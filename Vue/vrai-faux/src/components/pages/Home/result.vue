<template>
  <div class="d-flex flex-column align-items-center bg-white w-50 px-3 py-4">
    <h2>Terminé !</h2>
    <p>
      Vous avez répondu juste à {{ gameStore.note }} réponse sur
      {{ gameStore.ratio }}
    </p>
    <button @click="tryAgain" class="btn btn-primary">Rejouer</button>
  </div>
</template>

<script setup>
import useGameStore from "../../game/game";
import usePlayStore from "../../game/play";

const playStore = usePlayStore();
const gameStore = useGameStore();

const tryAgain = () => {
  playStore.play = true;
  gameStore.note = gameStore.ratio = 0;
};
</script>
