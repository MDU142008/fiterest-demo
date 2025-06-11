<template>
  <aside class="flex flex-col bg-neutral-800 w-20 py-8 items-center gap-8 shadow-xl min-h-screen">
    <img src="/logo.png" alt="Logo" class="w-14 h-14 mb-6 logo-glow" />
    <MenuButton icon="calendar" tooltip="Treino do Dia" to="/home" />
    <MenuButton icon="camera" tooltip="Correção Vídeo" to="/correcao" />
    <MenuButton icon="chat" tooltip="AI Coach" to="/ai" />
    <MenuButton icon="user" tooltip="Perfil" to="/perfil" />
    <MenuButton icon="training" tooltip="Plano de Treinamento" to="/training" />
    <MenuButton icon="trainer" tooltip="Personal Trainer" to="/trainer" />
  </aside>
</template>
<script setup>
import MenuButton from './MenuButton.vue'
</script>
<style scoped>
.logo-glow {
  filter: drop-shadow(0 0 40px #ff3c3c) drop-shadow(0 0 90px #ff3c3c);
}
</style>