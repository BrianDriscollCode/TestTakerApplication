<template>
  <main class="main-container">
    <questionCreator>
      <template v-slot:title>
        <h2> {{ state.title }}</h2>
      </template>
      
      <template v-slot:questionNumber>
        <p> Question: {{ state.currentQuestionNumber }}</p>
      </template>
    </questionCreator>
  </main>
</template>

<script setup>
// A) This is the application wrapper for creating tests
// B) Manages local app state for "CreateTest" functionality
// C) Slots in components to create testObjects (answers/questions)

// **REFER to "Create Test Diagram" for more info on create test app** //

import { onMounted, reactive } from "vue";
import { useCreateTestStore } from "@/stores/createTest";
import testObject from "./testObject";
import questionCreator from "./QuestionCreator.vue"; 

const myCreateTestStore = useCreateTestStore();

let state = reactive({
  modes: "questions",
  title: "",
  numberOfQuestions: 0,
  currentQuestionNumber: 1
});

onMounted(() => {
  state.title = myCreateTestStore.title;
  state.numberOfQuestions = myCreateTestStore.numberOfQuestions;
  myCreateTestStore.getInfo();
})

</script>

<style scoped>
.main-container {
  height: 90vh; /* Adjusted height to fit within the viewport */
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #a1c4fd, #c2e9fb); /* Modern background gradient */
  overflow: hidden; /* Prevent overflow */
  width: 100%;; /* Add some padding */
  box-sizing: border-box; /* Ensure padding is included in the height */
}
</style>