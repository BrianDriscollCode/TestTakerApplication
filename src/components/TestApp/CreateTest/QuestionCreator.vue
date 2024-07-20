<template>
    <main class="main-container">
        <button @click="debugFunction()"> Debug </button>
    
        <slot name="title" class="title"></slot>
        <slot name="questionNumber" class="questionNumber"></slot>

        <input class="questionText" placeholder="Enter Question" />

        <div v-for="(item, index) in numberOfAnswers" :key="index" class="answerInputContainer">
            <button @click="deleteAnswer(index)" class="deleteAnswerInput">x</button>
            <input class="answerWrapper" placeholder="Enter Answer" />
            <button
                :class="isAnswer === index ? 'isAnswer' : 'notAnswer'"
                @click="markAsAnswer(index)"
            >
                {{ isAnswer === index ? 'Unmark Answer' : 'Mark as Answer' }}
            </button>
        </div>
        <button @click="addAnswer" v-if="numberOfAnswers < 4" class="addAnswerButton">
            Add Answer
        </button>
        <button class="submitAnswer" :class="{ 'disabled': !isReadyToSubmit }">
            Submit Answer
        </button>
    </main>
</template>

<script setup>
//TODO
//Need to get submit answer to enable on submittial state completion
//Submit information to Pinia
//Create question in the test object
//think about cache (enable session and any other required data Pinia -> cache)

import { ref, reactive, onMounted } from "vue";
import { useCreateTestStore } from "@/stores/createTest";

let numberOfAnswers = ref(4);
let isAnswer = ref(-1); // Initialize with a value outside the range of answers
let isReadyToSubmit = ref(false);

const submittalState = reactive({
    questionFilled: false,
    allAnswersFilled: false,
    answerMarked: false
})

//Access pinia store
const createTestStore = useCreateTestStore();
//Access the testObject in pinia
const testObject = createTestStore.getTestObject();

// function debugFunction()
// {
//    let testObject = createTestStore.getTestObject();
//    testObject.createQuestion("test1", 1, "test2", "test3"); //submits question
   
//    console.log(createTestStore.getTestObject());
// }

function submitTest()
{

}

function markAsAnswer(index) {
    isAnswer.value = isAnswer.value === index ? -1 : index; // Toggle isAnswer value
}

function deleteAnswer(index) {
    numberOfAnswers.value -= 1;
}

function addAnswer() {
    numberOfAnswers.value += 1;
}

function printObject()
{
  console.log(currentTestObject.title);
  console.log(currentTestObject.identifier);
}


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

.answerInputContainer {
    display: flex;
    align-items: center;
    margin-top: 1em;
    width: 90%;
}

.deleteAnswerInput {
    margin-right: 0.5em;
    padding: 0.5em;
    border: none;
    background-color: #23b16e; /* Red color for delete button */
    color: white;
    cursor: pointer;
}

.answerWrapper {
    padding: 0.5em;
    border: 1px solid #ccc;
    border-radius: 4px;
    flex: 2; /* Take more space */
}

.isAnswer {
    padding: 0.5em 1em;
    margin-left: 0.5em;
    border: none;
    background-color: #23b16e; /* Green color for "Is Answer" button */
    color: white;
    cursor: pointer;
}

.notAnswer {
    padding: 0.5em 1em;
    margin-left: 0.5em;
    border: none;
    background-color: #d64b28; /* Red color for "Not Answer" button */
    color: white;
    cursor: pointer;
}

.title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 0.5em;
}

.questionNumber {
    font-size: 16px;
    color: #555;
    margin-bottom: 1em;
}

.questionText {
    width: 90%;
    padding: 0.5em;
    margin-bottom: 1em;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 16px;
}

.addAnswerButton {
  padding: 0.5em 1em;
  margin-top: 1em;
  border: none;
  background-color: #007bff; /* Blue color for the button */
  color: white;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
}

.addAnswerButton:hover {
  background-color: #0056b3; /* Darker shade of blue on hover */
}

.addAnswerButton:focus {
  outline: none; /* Remove default focus outline */
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5); /* Add a blue focus shadow */
}

.submitAnswer {
  padding: 0.5em 1em;
  margin-top: 1em;
  border: none;
  background-color: #007bff; /* Blue color for the button */
  color: white;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
}

.submitAnswer:hover {
  background-color: #0056b3; /* Darker shade of blue on hover */
}

.submitAnswer.disabled {
  background-color: #ccc; /* Grey out the button when disabled */
  cursor: not-allowed; /* Change cursor to indicate button is disabled */
}

.submitAnswer:focus {
  outline: none; /* Remove default focus outline */
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5); /* Add a blue focus shadow */
}
</style>