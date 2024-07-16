<template>
    <nav class="nav">
      <div :class="['overlay', { 'active': overlayVisible }]">
        <RouterLink class="overlayLink" to="/"> Home </RouterLink>
        <RouterLink class="overlayLink" to="/about"> About </RouterLink>
        <RouterLink class="overlayLink" to="/app"> App </RouterLink>
      </div>
  
      <div class="navLinkWrapper">
        <RouterLink class="navLink" to="/"> Home </RouterLink>
        <RouterLink class="navLink" to="/about"> About </RouterLink>
        <RouterLink class="navLink" to="/app"> App </RouterLink>
      </div>
  
      <div class="hamburgerWrapper" @click="toggleOverlay">
        <img :src="hamburgerIcon" height="75px" width="75px" class="hamburger">
      </div>
  
      <div class="LoginLinkContainer"> 
        <RouterLink class="navLogin LoginLink" to="/login"> {{ store.logStatus ? store.email: "Login" }} </RouterLink>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import { supabase } from "../clients/supabase";
  import { useAccountStore } from "@/stores/account";
  import hamburgerIcon from "@/assets/hamburgerMenu.png";
  import hamburgerIconAnim from "@/assets/hamburgerMenuAnim.json";
  
  const store = useAccountStore();
  
  let sessionActive = ref(false);
  let userEmail = ref("");
  let overlayVisible = ref(false);
  
  async function checkSession() {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (user) {
      sessionActive.value = true;
      userEmail.value = user.email;
    }
  }
  
  function toggleOverlay() {
    overlayVisible.value = !overlayVisible.value;
  }
  
  onMounted(() => {
    checkSession();
    store.registerUser();
  });
  </script>
  
  <style scoped>
  .nav {
    background-color: rgb(73, 173, 140);
    display: flex;
    justify-content: center;
    align-items: center; /* Center items vertically */
    height: 10vh; /* Ensure nav takes up 10% of the viewport height */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .navLink {
    margin: 0 1em;
    color: white;
    font-size: 1.2em;
    text-transform: uppercase;
    cursor: pointer;
    transition: color 0.3s ease, background-color 0.3s ease;
    display: flex; /* Use flexbox */
    align-items: center; /* Center text vertically */
    padding: 0.5em 1em; /* Add padding for better click area */
    border-radius: 20px; /* More rounded corners for modern look */
    text-decoration: none;
  }
  
  .navLinkWrapper {
    display: flex;
    flex-direction: row;
  }
  
  .navLink:hover {
    color: rgb(73, 173, 140);
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add shadow on hover */
  }
  
  .hamburgerWrapper {
    display: none;
    z-index: 1001;
  }
  
  .hamburger {
    padding: 1em;
    z-index: 1001;
  }
  
  .navLogin {}
  
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    z-index: 1000;
    transition: width 0.5s ease, height 0.5s ease;
  }
  
  .overlay.active {
    width: 100%;
    height: 100%;
  }
  
  .overlayLink {
    color: white;
    font-size: 1.5em;
    margin: 1em;
    text-decoration: none;
    text-transform: uppercase;
    transition: color 0.3s ease, background-color 0.3s ease;
    padding: 0.5em 1em; /* Add padding for better click area */
    border-radius: 20px; /* More rounded corners for modern look */
  }
  
  .overlayLink:hover {
    color: rgb(73, 173, 140);
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add shadow on hover */
  }
  
  .LoginLinkContainer {
    position: absolute;
    right: 0px;
  }
  
  .LoginLink {
    margin: 0 1em;
    color: white;
    font-size: 1.2em;
    text-transform: uppercase;
    cursor: pointer;
    transition: color 0.3s ease, background-color 0.3s ease;
    display: flex; /* Use flexbox */
    align-items: center; /* Center text vertically */
    padding: 0.5em 1em; /* Add padding for better click area */
    border-radius: 20px; /* More rounded corners for modern look */
    text-decoration: none;
  }
  
  .LoginLink:hover {
    color: rgb(73, 173, 140);
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add shadow on hover */
  }
  
  /* Responsive Styles */
  @media (max-width: 950px) {
    .nav {
      justify-content: space-between;
    }
  
    .navLinkWrapper {
      display: none;
    }
  
    .hamburgerWrapper {
      display: inline-block;
    }
  }
  
  @media (max-width: 480px) {
    .navLink, .LoginLink {
      font-size: 0.9em;
      padding: 0.4em;
    }
  }
  </style>