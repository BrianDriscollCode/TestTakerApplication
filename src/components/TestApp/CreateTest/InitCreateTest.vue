<template>
  <main class="main-container">
    <h1> Init Create Test </h1>
    <input v-model="title" class="styled-input" placeholder="Enter title"> </input>
    <input v-model="numberOfQuestions" class="styled-input" placeholder="Enter number of questions"> </input>
    <button @click="startCreateTest" class="styled-button"> Start Creating Test </button>
  </main>
</template>

<script setup>
import { ref, onMounted, createRenderer } from "vue";
import { useRouter } from "vue-router";
import { useCreateTestStore } from "@/stores/createTest";
import TestObject from "./testObject";

let title = ref("");
let numberOfQuestions = ref("");

const createTestStore = useCreateTestStore();
const router = useRouter();
let uuid = self.crypto.randomUUID();

// initializes CreateTestWrapper and updates pinia and soon cache
// Refer to "Create Test Diagram" in documentation for application info
function startCreateTest()
{
  createTestStore.title = title.value;
  createTestStore.numberOfQuestions = numberOfQuestions.value;
  createTestStore.identifier = crypto.randomUUID();
  createTestStore.active = true;
  createTestStore.testObject = new TestObject("test", "id");

  createTestStore.populateTestObject();

  router.push("/app/createTest");
}

onMounted(() => {
  window.addEventListener("keydown", (e) => {
    if (e.key == "Enter")
    {
      startCreateTest();
    }
  })
})


</script>

<style scoped>
.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh; /* Make sure the container takes full height */
  padding: 2em;
  box-sizing: border-box;
  background-color: #f0f4f8; /* Light background for contrast */
}

.styled-input {
  width: 80%; /* Responsive width */
  max-width: 600px;
  padding: 1em;
  margin: 1em 0;
  font-size: 1em;
  border: 2px solid #dcdfe3; /* Light border */
  border-radius: 50px; /* Rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Light shadow for depth */
  transition: border-color 0.3s ease, box-shadow 0.3s ease; /* Smooth transitions */
}

.styled-input:focus {
  border-color: rgb(73, 173, 140); /* Match button color on focus */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Increase shadow on focus */
  outline: none; /* Remove default outline */
}

.styled-button {
  background-color: rgb(73, 173, 140);
  color: white;
  font-size: 1.5em; /* Adjust font size for a modern look */
  padding: 1em 2em;
  margin: 1em 0;
  border: none;
  border-radius: 50px; /* More rounded corners for a modern feel */
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transitions */
  text-align: center;
  width: 80%; /* Increased width for a better look */
  max-width: 600px; /* Set a max width for the buttons */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add shadow for depth */
  text-decoration: none;
}

.styled-button:hover {
  background-color: rgb(63, 153, 120);
  transform: translateY(-3px); /* Slight upward movement on hover */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Increase shadow on hover */
}

.styled-button:active {
  background-color: rgb(53, 133, 100);
  transform: translateY(0); /* Reset movement on active */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Reset shadow on active */
}
</style>