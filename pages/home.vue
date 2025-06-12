<template>
  <div class="min-h-screen flex flex-col items-center bg-neutral-900 py-8 px-2">
    <div class="w-full max-w-2xl">
      <!-- Cabeçalho -->
      <h1 class="text-3xl font-bold text-white mb-3 tracking-tight">Treino do Dia</h1>
      <p class="text-neutral-400 mb-8">Seu treino foi montado para hoje, execute cada exercício com atenção.</p>

      <!-- Lista de Exercícios -->
      <div class="space-y-6">
        <div
          v-for="(ex, i) in treino"
          :key="i"
          class="bg-[#18181b] rounded-2xl p-5 flex gap-4 items-center shadow-lg border border-neutral-800 hover:scale-[1.02] hover:shadow-red-900/20 transition"
        >
          <!-- Ícone ou Imagem (opcional) -->
          <div class="flex-shrink-0">
            <component :is="ex.icone" class="w-12 h-12 text-[#ef4444]" />
          </div>
          <!-- Detalhes do exercício -->
          <div class="flex-1">
            <div class="flex justify-between items-center">
              <h2 class="text-xl font-bold text-white">{{ ex.nome }}</h2>
              <span class="text-xs text-neutral-400 font-semibold">{{ ex.grupo }}</span>
            </div>
            <div class="mt-2 flex gap-6 text-sm text-neutral-300">
              <span><b>Séries:</b> {{ ex.series }}</span>
              <span><b>Reps:</b> {{ ex.repeticoes }}</span>
              <span><b>Descanso:</b> {{ ex.descanso }}s</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Observações -->
      <div class="mt-10 text-neutral-400 text-sm border-t border-neutral-800 pt-6">
        <b>Dica:</b> Execute o aquecimento antes e alongue-se ao finalizar!
      </div>
    </div>
  </div>
</template>

<script setup>
// Ícones em SVG (você pode customizar depois ou importar de lib como Heroicons)
const ExercicioIcon = {
  template: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="8" width="16" height="8" rx="4"/><rect x="2" y="11" width="4" height="2" rx="1"/><rect x="18" y="11" width="4" height="2" rx="1"/></svg>`
}
const DumbbellIcon = {
  template: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="10" width="18" height="4" rx="2"/><rect x="1" y="8" width="2" height="8" rx="1"/><rect x="21" y="8" width="2" height="8" rx="1"/></svg>`
}
const RunnerIcon = {
  template: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="16" cy="4" r="2"/><path d="M8 20l3.5-6 2 2 3.5-2.5"/><path d="M9 11l4-2 1 2"/><path d="M6 12l2-2 1.5 2.5"/></svg>`
}

// Exemplo de dados do treino do dia
const treino = [
  {
    nome: "Agachamento Livre",
    grupo: "Quadríceps/Glúteos",
    series: 4,
    repeticoes: 10,
    descanso: 90,
    icone: DumbbellIcon,
  },
  {
    nome: "Cadeira Extensora",
    grupo: "Quadríceps",
    series: 3,
    repeticoes: 12,
    descanso: 60,
    icone: ExercicioIcon,
  },
  {
    nome: "Avanço Unilateral",
    grupo: "Glúteos/Posteriores",
    series: 3,
    repeticoes: 10,
    descanso: 90,
    icone: RunnerIcon,
  },
  {
    nome: "Panturrilha em Pé",
    grupo: "Panturrilha",
    series: 4,
    repeticoes: 15,
    descanso: 45,
    icone: ExercicioIcon,
  },
]
import SideMenu from '@/components/SideMenu.vue'
import BottomMenu from '@/components/BottomMenu.vue'

</script>
