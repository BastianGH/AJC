<template>
  <div class="bg-white w-50 px-3 py-4">
    <form @submit="checkSettings" class="form">
      <h2 class="text-center">Paramètres</h2>
      <div v-if="errors.length > 0" class="text-danger">
        <ul>
          <li v-for="(error, index) in errors" :key="index">
            {{ error }}
          </li>
        </ul>
      </div>
      <div class="mb-3">
        <label for="" form-label>Difficulté : </label>
        <select
          name=""
          id=""
          v-model="formSettings.level"
          class="form-select form-select"
        >
          <option value="">Choisissez une difficulté</option>
          <option value="Facile" selected>Facile</option>
          <option value="Moyen">Moyen</option>
          <option value="Difficile">Difficile</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Nombre de questions : </label>
        <input
          type="number"
          placeholder="2"
          class="form-control"
          v-model="formSettings.number"
          min="1"
          max="5"
        />
      </div>
      <p>Catégories :</p>
      <div class="d-flex flex-wrap gap-4 mb-3">
        <div class="form-check">
          <input
            type="checkbox"
            id="Tous"
            name="Tous"
            checked
            class="form-check-input"
            value="Tous"
            v-model="formSettings.categories"
          />
          <label for="Tous" class="form-check-label">Tous</label>
        </div>
        <div class="form-check">
          <input
            type="checkbox"
            id="Sport"
            name="Sport"
            class="form-check-input"
            value="Sport"
            v-model="formSettings.categories"
          />
          <label for="Sport" class="form-check-label">Sport</label>
        </div>
        <div class="form-check">
          <input
            type="checkbox"
            id="Géographie"
            name="Géographie"
            value="Géographie"
            class="form-check-input"
            v-model="formSettings.categories"
          />
          <label for="Géographie" class="form-check-label">Géographie</label>
        </div>
        <div class="form-check">
          <input
            type="checkbox"
            id="Art"
            name="Art"
            class="form-check-input"
            value="Art"
            v-model="formSettings.categories"
          />
          <label for="Art" class="form-check-label">Art</label>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <button class="btn btn-primary">Enregistrer les modifications</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import useSettingsStore from "../../game/settings";
import usePlayStore from "@/components/game/play";

const router = useRouter();
const settingsStore = useSettingsStore();
const playStore = usePlayStore();

/* managing form */

const errors = reactive([]);
const formSettings = reactive({
  level: "",
  number: 0,
  categories: [],
});

/* on submit */

const checkSettings = (e) => {
  e.preventDefault();
  errors.splice(0);

  if (!formSettings.level) {
    errors.push("Veuillez choisir une difficulté");
  }

  if (!formSettings.number) {
    errors.push("Veuillez entrer un nombre supérieur à 0");
  }

  if (formSettings.categories.length === 0) {
    errors.push("Veuillez choisir au moins une catégorie");
  }

  if (errors.length === 0) {
    submitSettings();
  }
};

const submitSettings = () => {
  const askForAll = formSettings.categories.includes("Tous");

  if (askForAll) {
    formSettings.categories = ["Sport", "Géographie", "Art"];
  }

  if (formSettings.level === "Facile") {
    formSettings.number = 1;
  } else if (formSettings.level === "Moyen") {
    formSettings.number = 3;
  } else {
    formSettings.number = 5;
  }
  settingsStore.level = formSettings.level;
  settingsStore.number = formSettings.number;
  settingsStore.categories = formSettings.categories;

  // console.log(settingsStore.level);
  // console.log(settingsStore.number);
  // console.log(settingsStore.categories);

  // setTimeout(() => {
  //   router.push("/");
  // }, 2000);

  playStore.play = true;
  router.push("/");
};
</script>
