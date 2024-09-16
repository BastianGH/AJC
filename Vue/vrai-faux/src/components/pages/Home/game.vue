<template>
  <div class="d-flex flex-column align-items-center bg-white w-50 px-3 py-4">
    <h3 class="text-center mb-5">{{ question.label }}</h3>
    <div class="d-flex gap-4">
      <button @click="testTrue" class="btn btn-success">Vrai</button>
      <button @click="testFalse" class="btn btn-danger">Faux</button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, computed } from "vue";
import axios from "axios";
import usePlayStore from "../../game/play";
import useGameStore from "../../game/game";
import useSettingsStore from "@/components/game/settings";

/* managing question */

const question = reactive({
  id: 0,
  label: "",
  correct: false,
});

/* managing game */

const playStore = usePlayStore();
const gameStore = useGameStore();
const settingsStore = useSettingsStore();

let remainingQuestions = reactive([]);
let numberOfQuestion = settingsStore.number;

const getRandom = (n) => Math.floor(Math.random() * n) + 1;

const randomizeQuestion = (remainingOnes) => {
  const generatedId = getRandom(remainingOnes.length);
  const generatedQuestion = remainingOnes[generatedId - 1];

  //   console.log("remaing", remainingQuestions);
  //   console.log(getRandom(remainingOnes.length));
  //   console.log(question);

  question.id = generatedQuestion.id;
  question.label = generatedQuestion.label;
  question.correct = generatedQuestion.correct;
};
/* Fetching Questions */

const getQuestion = () => {
  axios
    .get(`http://localhost:3000/questions`)
    .then((res) => {
      remainingQuestions = res.data.filter((res) => {
        for (let i = 0; i < settingsStore.categories.length; i++) {
          return (
            res.level == settingsStore.level &&
            res.category == settingsStore.categories[i]
          );
        }
      });

      remainingQuestions = remainingQuestions.slice(0, numberOfQuestion);

      console.log(remainingQuestions);
      if (remainingQuestions.length !== 0) {
        randomizeQuestion(remainingQuestions);
      } else {
        question.label =
          "Y'a pas de question par ici, vous l'avez dans l'os pas vrai ? B)";
        question.correct = true;
      }
    })
    .catch((err) => {
      console.error("Sorry, something went wrong", err);
    });
};

onMounted(() => {
  getQuestion();
});

/* Test */

const testTrue = () => {
  if (question.correct) gameStore.note++;
  goNext();
};

const testFalse = () => {
  if (!question.correct) gameStore.note++;
  goNext();
};

const goNext = () => {
  gameStore.ratio++;
  remainingQuestions = remainingQuestions.filter(
    (remainingQuestion) => remainingQuestion.id != question.id
  );
  //questionAnswered.push(question.id);

  //   console.log("Note : ");
  //   console.log(note + " / " + ratio);
  //   console.log(questionAnswered);

  if (remainingQuestions.length > 0) {
    randomizeQuestion(remainingQuestions);
  } else {
    playStore.play = false;
  }
};
</script>
