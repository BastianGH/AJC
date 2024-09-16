<template>
  <div class="badass-todo">
    <div class="title has-text-centered">Badass Todo</div>

    <form action="" @submit.prevent="addTodo">
      <div class="field is-grouped mb-5">
        <div class="control is-expanded">
          <input
            class="input"
            type="text"
            placeholder="Add a todo"
            v-model="newTodoContent"
          />
        </div>
        <div class="control">
          <button class="button is-info" :disabled="!newTodoContent">
            Add
          </button>
        </div>
      </div>
    </form>

    <div
      class="card mb-5"
      v-for="todo in todos"
      :class="{ 'has-background-success-light': todo.done }"
    >
      <div class="card-content">
        <div class="content">
          <div class="columns is-mobile is-vcentered">
            <div
              class="column"
              :class="{ 'has-text-success line-through': todo.done }"
            >
              {{ todo.content }}
            </div>
            <div class="column is-5 has-text-right">
              <button
                class="button"
                :class="todo.done ? 'is-success' : 'is-light'"
                @click="toggleDone(todo.id)"
              >
                &check;
              </button>
              <button
                class="button is-danger ml-2"
                @click="deleteTodo(todo.id)"
              >
                &cross;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import {
  collection,
  onSnapshot,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "./firebase";

const todosCollectionRef = collection(db, "todos");
const todosCollectionQuery = query(todosCollectionRef, orderBy("date", "desc"));
const todos = ref([
  // {
  //   id: "id1",
  //   content: "Shave my butt",
  //   done: false,
  // },
  // {
  //   id: "id2",
  //   content: "Wash my butt",
  //   done: true,
  // },
]);

onMounted(() => {
  onSnapshot(todosCollectionQuery, (querySnapshot) => {
    const fbTodos = [];
    querySnapshot.forEach((doc) => {
      const todo = {
        id: doc.id,
        content: doc.data().content,
        done: doc.data().done,
      };
      fbTodos.push(todo);
    });
    todos.value = fbTodos;
  });
});
const newTodoContent = ref("");

const addTodo = () => {
  addDoc(todosCollectionRef, {
    content: newTodoContent.value,
    done: false,
    date: Date.now(),
  });
  newTodoContent.value = "";
};

const deleteTodo = (id) => {
  deleteDoc(doc(todosCollectionRef, id));
};

const toggleDone = (id) => {
  const index = todos.value.findIndex((todo) => todo.id == id);

  updateDoc(doc(todosCollectionRef, id), {
    done: !todos.value[index].done,
  });
};
</script>

<style>
@import "bulma/css/bulma.min.css";

.badass-todo {
  max-width: 600px;
  padding: 20px;
  margin: 0 auto;
}

.line-through {
  text-decoration: line-through;
}
</style>
