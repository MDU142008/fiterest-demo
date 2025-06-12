<template>
  <nav class="fixed bottom-0 left-0 right-0 bg-neutral-900 flex md:hidden justify-around py-3 z-50 border-t border-neutral-800">
    <MenuButton icon="calendar" tooltip="Treino do Dia" to="/home" />
    <MenuButton icon="camera" tooltip="Correção Vídeo" to="/correcao" />
    <MenuButton icon="chat" tooltip="AI Coach" to="/coach" />
    <MenuButton icon="user" tooltip="Perfil" to="/perfil" />
    <MenuButton icon="training" tooltip="Plano de Treinamento" to="/training" />
    <MenuButton
      v-if="plan === 'trainer'"
      icon="trainer"
      tooltip="Personal Trainer"
      to="/trainer"
    />
  </nav>
</template>

<script setup>
import MenuButton from './MenuButton.vue'
import { useUserPlan } from '~/composables/useUserPlan'
const { plan } = useUserPlan()
</script>