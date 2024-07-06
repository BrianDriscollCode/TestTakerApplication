<script setup>
</script>

<template>
  <main class="main-container">
    <div class="button">Create Test</div>
    <div class="button">Take Test</div>
    <div class="button">See Test Results</div>
  </main>
</template>

<style scoped>
.main-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%; /* Make sure the container takes full height */
}

.button {
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
}

.button:hover {
    background-color: rgb(63, 153, 120);
    transform: translateY(-3px); /* Slight upward movement on hover */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Increase shadow on hover */
}

.button:active {
    background-color: rgb(53, 133, 100);
    transform: translateY(0); /* Reset movement on active */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Reset shadow on active */
}
</style>