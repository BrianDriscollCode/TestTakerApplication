<template>
  <main class="main-container">
    {{ state.title }}
    {{ state.numberOfQuestions }}
    <button @click="printObject"> printObject </button>
  </main>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import { useCreateTestStore } from "@/stores/createTest";
import testObject from "./testObject";

const myCreateTestStore = useCreateTestStore();

let state = reactive({
  modes: "questions",
  title: "",
  numberOfQuestions: 0
});

let currentTestObject = new testObject("test", "test1");

onMounted(() => {
  state.title = myCreateTestStore.title;
  state.numberOfQuestions = myCreateTestStore.numberOfQuestions;
  myCreateTestStore.getInfo();
})

function printObject()
{
  console.log(currentTestObject.title);
  console.log(currentTestObject.identifier);
}

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