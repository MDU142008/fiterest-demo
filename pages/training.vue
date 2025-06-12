<template>
  <div class="min-h-screen bg-neutral-900 flex flex-col items-center py-8">
    <div class="w-full max-w-2xl mx-auto p-4 bg-neutral-800 rounded-2xl shadow-xl">
      <!-- Cabeçalho do calendário com navegação de meses -->
      <div class="flex items-center justify-between mb-6">
        <button @click="prevMonth" class="text-2xl text-red-400 hover:text-white transition">&lt;</button>
        <h2 class="text-xl md:text-2xl font-bold text-white tracking-wider">
          {{ monthYearLabel }}
        </h2>
        <button @click="nextMonth" class="text-2xl text-red-400 hover:text-white transition">&gt;</button>
      </div>
      <!-- Dias da semana -->
      <div class="grid grid-cols-7 text-sm md:text-base text-neutral-400 mb-1">
        <div v-for="(w, i) in weekdays" :key="i" class="text-center">{{ w }}</div>
      </div>
      <!-- Dias do mês -->
      <div class="grid grid-cols-7 gap-2">
        <div v-for="blank in startDay" :key="'b'+blank"></div>
        <div
          v-for="day in daysInMonth"
          :key="day"
          class="aspect-square flex flex-col items-center justify-center rounded-xl border-2 transition-all relative group select-none cursor-pointer"
          :class="{
            'bg-red-500 text-white font-bold border-red-500 shadow-lg': hasWorkout(day),
            'bg-neutral-800 text-neutral-200 hover:border-red-400 hover:scale-105': !hasWorkout(day)
          }"
        >
          <span>{{ day }}</span>
          <span v-if="hasWorkout(day)" class="text-xs mt-1">Treino</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Estado do calendário
const today = new Date()
const year = ref(today.getFullYear())
const month = ref(today.getMonth())

// Funções para navegação
function prevMonth() {
  if (month.value === 0) {
    month.value = 11
    year.value -= 1
  } else {
    month.value -= 1
  }
}
function nextMonth() {
  if (month.value === 11) {
    month.value = 0
    year.value += 1
  } else {
    month.value += 1
  }
}

// Gerar dias do mês
const daysInMonth = computed(() => {
  return new Date(year.value, month.value + 1, 0).getDate()
})
const startDay = computed(() => {
  let d = new Date(year.value, month.value, 1).getDay()
  return d === 0 ? 6 : d - 1
})
const weekdays = ['S', 'T', 'Q', 'Q', 'S', 'S', 'D']

const monthYearLabel = computed(() =>
  new Date(year.value, month.value).toLocaleString('default', { month: 'long', year: 'numeric' })
)

// MOCK: Dias com treino (exemplo: 2, 4, 7, 10, 12, etc.)
const workoutDays = [2, 4, 7, 10, 12, 16, 18, 21, 23, 28]
function hasWorkout(day) {
  return workoutDays.includes(day)
}
</script>