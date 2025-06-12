<template>
  <nav class="hidden md:flex flex-col justify-between items-center bg-neutral-900 py-10 px-3 h-screen w-24 fixed left-0 top-0 z-40 shadow-2xl">
    <!-- LOGO GRANDE NO TOPO -->
    <img
      src="/logo.png"
      alt="Logo"
      class="w-16 h-16 mb-10 drop-shadow-[0_0_32px_#ff3c3caa] transition-all duration-300"
    />
    <div class="flex flex-col gap-8 w-full items-center">
      <!-- Botões do menu -->
      <MenuButton icon="calendar" tooltip="Treino do Dia" to="/home" />
      <MenuButton icon="camera" tooltip="Correção Vídeo" to="/correcao" />
      <MenuButton icon="chat" tooltip="AI Coach" to="/coach" />
      <MenuButton icon="user" tooltip="Perfil" to="/perfil" />
      <MenuButton icon="training" tooltip="Plano de Treinamento" to="/training" />
      <!-- Só aparece se for plano 'trainer' -->
      <MenuButton
        v-if="plan === 'trainer'"
        icon="trainer"
        tooltip="Personal Trainer"
        to="/trainer"
      />
    </div>
    <div class="flex flex-col gap-2">
      <!-- Qualquer outro item opcional de rodapé -->
    </div>
  </nav>
</template>

<script setup>
import MenuButton from './MenuButton.vue'
import { useUserPlan } from '~/composables/useUserPlan'
const { plan } = useUserPlan()
</script>