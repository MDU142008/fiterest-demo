<template>
  <button
    @click="navigate"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    @mousedown="isPressed = true"
    @mouseup="isPressed = false"
    @touchstart="isPressed = true"
    @touchend="isPressed = false"
    class="relative flex flex-col items-center justify-center group focus:outline-none transition-all duration-200 w-14 h-14"
    :title="tooltip"
  >
    <!-- Glow animado ao hover/click -->
    <span
      class="absolute z-0 rounded-full pointer-events-none transition-all duration-200"
      :style="glowStyle"
    ></span>
    <!-- SVG ícone -->
    <span
      v-html="iconSVG"
      class="w-7 h-7 mb-1 text-red-500 group-hover:text-white group-active:text-white transition-all duration-200 z-10 relative"
      style="pointer-events:none"
    ></span>
    <!-- Tooltip -->
    <span
      v-if="tooltip"
      class="text-[10px] text-neutral-300 group-hover:text-red-400 group-active:text-red-400 font-medium z-10 relative"
    >
      {{ tooltip }}
    </span>
  </button>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  icon: String,    // 'calendar', 'camera', 'chat', 'user', 'training', 'trainer'
  tooltip: String,
  to: String
})

const router = useRouter()
const isHovered = ref(false)
const isPressed = ref(false)

function navigate() {
  if (props.to) router.push(props.to)
}


// SVGs inline
const iconSVG = computed(() => {
  switch (props.icon) {
    case 'calendar':
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="4" />
        <path d="M16 2v4M8 2v4M3 10h18"/>
      </svg>`
    case 'camera':
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <circle cx="12" cy="12" r="3" />
        <path d="M15 8h.01"/>
      </svg>`
    case 'chat':
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`
    case 'user':
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="8" r="4"/>
        <path d="M4 20c0-4 4-7 8-7s8 3 8 7"/>
      </svg>`
    case 'training':
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2"/>
        <path d="M8 2v4M16 2v4"/>
        <path d="M2 10h20"/>
      </svg>`
    case 'trainer':
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