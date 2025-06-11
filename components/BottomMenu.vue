<template>
  <nav class="fixed bottom-0 left-0 w-full flex justify-around bg-neutral-800 py-2 shadow-2xl z-50 md:hidden">
    <MenuButton icon="calendar" to="/home" />
    <MenuButton icon="camera" to="/correcao" />
    <MenuButton icon="chat" to="/ai" />
    <MenuButton icon="user" to="/perfil" />
    <MenuButton icon="training" to="/training" />
    <MenuButton icon="trainer" to="/trainer" />
  </nav>
</template>
<script setup>
import MenuButton from './MenuButton.vue'
</script>