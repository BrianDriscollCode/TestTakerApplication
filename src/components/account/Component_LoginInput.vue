<template>
    <div class="login-container">
        <h2>Login</h2>
        <form class="login-form" @submit.prevent>
            <input v-model="email" placeholder="Email" required />
            <input v-model="password" placeholder="Password" required />
            <button @click="login">Login</button>
            <button @click="signOut"> Sign Out </button>
            <div class="otherOptions">
              <RouterLink class="otherOptionsLink" to="./createaccount"> Create Account </RouterLink>
              <a class="otherOptionsLink" href="#"> Guest Sign In </a>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { supabase } from "../../clients/supabase";

let email = ref("");
let password = ref("");


async function login()
{
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value
  })

  console.log(data)
}

async function signOut()
{
  const { error } = await supabase.auth.signOut();
  console.log(error);
}

</script>


<style scoped>
.login-container {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add shadow for depth */
  text-align: center;
  width: 100%;
  max-width: 400px; /* Set a max width for the login container */
}

h2 {
  margin-bottom: 1.5rem;
  color: #333; /* Darker color for better readability */
}

.login-form {
  display: flex;
  flex-direction: column;
}

.login-form input {
  margin-bottom: 1rem;
  padding: 0.75rem;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 5px; /* Rounded corners for inputs */
}

.login-form button {
  background-color: rgb(73, 173, 140);
  color: white;
  font-size: 1.2em;
  margin: 1em 0;
  padding: 0.75em 1.5em;
  border: none;
  border-radius: 50px; /* More rounded corners for modern feel */
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.login-form button:hover {
  background-color: rgb(63, 153, 120);
  transform: translateY(-3px); /* Slight upward movement on hover */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Increase shadow on hover */
}

.login-form button:active {
  background-color: rgb(53, 133, 100);
  transform: translateY(0); /* Reset movement on active */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Reset shadow on active */
}

.otherOptions 
{
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  color: rgb(53, 133, 100)
}

.otherOptionsLink
{
  color: rgb(89, 134, 112)
}

.otherOptionsLink:hover
{
  color: rgb(124, 199, 168)
}

</style>