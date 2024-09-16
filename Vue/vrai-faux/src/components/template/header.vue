<template>
  <header
    class="d-flex justify-content-between align-items-center px-5 py-3 border-bottom bg-dark"
  >
    <h1 class="m-0 text-primary">Vrai ou faux ?</h1>
    <nav>
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link to="/" class="nav-link" @click="begin"
            >Jouer</router-link
          >
        </li>
        <li>
          <router-link to="/settings" class="nav-link">Paramètres</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import usePlayStore from "../game/play";

const playStore = usePlayStore();
const begin = () => (playStore.play = true);
</script>
