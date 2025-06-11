<template>
  <button
    @click="navigate"
    class="flex flex-col items-center justify-center group focus:outline-none"
    :title="tooltip"
  >
    <span v-html="iconSVG" class="w-7 h-7 mb-1 text-red-500 group-hover:text-white transition"></span>
    <span v-if="tooltip" class="text-[10px] text-neutral-300 group-hover:text-red-400 font-medium">{{ tooltip }}</span>
  </button>
</template>

<script setup>
import { useRouter } from 'vue-router'
const props = defineProps({
  icon: String,   // nome do ícone
  tooltip: String,
  to: String      // rota de destino
})
const router = useRouter()
function navigate() {
  if (props.to) router.push(props.to)
}

// SVGs minimalistas:
const iconSVG = computed(() => {
  switch (props.icon) {
    case 'calendar': // ícone de calendário
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="4" />
        <path d="M16 2v4M8 2v4M3 10h18"/>
      </svg>`
    case 'camera': // ícone de câmera
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <circle cx="12" cy="12" r="3" />
        <path d="M15 8h.01"/>
      </svg>`
    case 'chat': // ícone de chat
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`
    case 'user': // ícone de usuário
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="8" r="4"/>
        <path d="M4 20c0-4 4-7 8-7s8 3 8 7"/>
      </svg>`
    case 'training': // ícone para plano de treinamento
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2"/>
        <path d="M8 2v4M16 2v4"/>
        <path d="M2 10h20"/>
      </svg>`
    case 'trainer': // ícone para personal trainer
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="7" r="4"/>
        <path d="M5.5 21a8.38 8.38 0 0 1 13 0"/>
        <path d="M15.5 17a4 4 0 0 0-7 0"/>
      </svg>`
    default:
      return '';
  }
});
</script>