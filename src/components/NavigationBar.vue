<template>
    <nav class="nav">
        <RouterLink class="navLink" to="/"> Home </RouterLink>
        <RouterLink class="navLink" to="/about"> About </RouterLink>
        <RouterLink class="navLink" to="/app"> App </RouterLink>

        <div class="LoginLinkContainer"> 
            <RouterLink class="navLogin LoginLink" to="/login"> {{ sessionActive ? userEmail : "Login" }} </RouterLink>
        </div>
    </nav>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "../clients/supabase";

let sessionActive = ref(false);
let userEmail = ref("");

async function checkSession()
{
    const { data: { user } } = await supabase.auth.getUser();
    
    if (user)
    {
        sessionActive.value = true;
        userEmail.value = user.email;
    }
}

onMounted(() => {
    checkSession();
})

</script>

<style scoped>
.nav 
{
    background-color: rgb(73, 173, 140);
    display: flex;
    justify-content: center;
    align-items: center; /* Center items vertically */
    height: 10vh; /* Ensure nav takes up 10% of the viewport height */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.navLink 
{
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

.navLink:hover 
{
    color: rgb(73, 173, 140);
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add shadow on hover */
}

.navLogin
{

}


.LoginLinkContainer
{
    position: absolute;
    right: 0px;
}

.LoginLink 
{
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

.LoginLink:hover 
{
    color: rgb(73, 173, 140);
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add shadow on hover */
}


</style>