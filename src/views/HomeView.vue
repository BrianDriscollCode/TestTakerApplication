<script setup>
import NavbarComponent from '../components/NavigationBar.vue'


</script>

<template>
  <main>
    <NavbarComponent></NavbarComponent> 
    <section class="hero">
      <h1>Create Tests and Take Tests</h1>
      <p class="tagline">Your tool for easily creating tests as a study tool</p>
      <RouterLink to="/app"> <button class="cta-button">Go to Test Taker App</button> </RouterLink>
    </section>
  </main>
</template>

<style scoped>
main {
  height: 100vh; /* Full viewport height */
  display: flex;
  flex-direction: column;
}

.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1; /* Take up remaining space */
  text-align: center;
  background: linear-gradient(to right, #a1c4fd, #c2e9fb); /* Modern background gradient */
  padding: 2rem;
}

h1 {
  font-size: 3em;
  color: #333; /* Darker color for better readability */
  margin-bottom: 0.5em;
}

.tagline {
  font-size: 1.5em;
  color: #666; /* Subtle color for tagline */
  margin-bottom: 1.5em;
}

.cta-button {
  background-color: rgb(73, 173, 140);
  color: white;
  font-size: 1.2em;
  padding: 0.75em 1.5em;
  border: none;
  border-radius: 50px; /* More rounded corners for modern feel */
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.cta-button:hover {
  background-color: rgb(63, 153, 120);
  transform: translateY(-3px); /* Slight upward movement on hover */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Increase shadow on hover */
}

.cta-button:active {
  background-color: rgb(53, 133, 100);
  transform: translateY(0); /* Reset movement on active */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Reset shadow on active */
}
</style>