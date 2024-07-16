<template>
  <main>
    <NavBar> </NavBar>
    <CreateTestWrapper></CreateTestWrapper>
  </main>
</template>

<script setup>
import NavBar from "@/components/NavigationBar.vue";
import CreateTestWrapper from "@/components/TestApp/CreateTest/CreateTestWrapper.vue";

</script>

<style scoped>
main 
{
  height: 100vh;
}
</style>
