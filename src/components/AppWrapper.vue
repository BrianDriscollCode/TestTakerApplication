<script setup>
import TestApp from './TestApp/TestApp.vue'
</script>

<template>
  <main class="main-container">
    <TestApp class="app"> </TestApp>
  </main>
</template>

<style scoped>
.main-container {
  height: 90vh; /* Adjusted height to fit within the viewport */
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #a1c4fd, #c2e9fb); /* Modern background gradient */
  overflow: hidden; /* Prevent overflow */
  padding: 20px; /* Add some padding */
  box-sizing: border-box; /* Ensure padding is included in the height */
}

.app {
  background-color: white;
  height: 100%; /* Ensure the app spans the entire height of the main container */
  width: 100%;
  max-width: 1200px; /* Set a max width for the app */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add a subtle shadow for depth */
  border-radius: 20px; /* Round the corners */
  overflow: hidden; /* Prevent overflow */
  padding: 20px; /* Add some padding */
  box-sizing: border-box; /* Ensure padding is included in the height */
}
</style>