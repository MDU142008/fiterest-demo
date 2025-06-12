<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-neutral-900 py-8 px-2">
    <div class="w-full max-w-2xl bg-[#18181b] rounded-2xl shadow-2xl border border-neutral-800 p-0 flex flex-col h-[80vh]">
      <div class="flex items-center gap-3 px-6 py-4 border-b border-neutral-800 bg-[#18181b] rounded-t-2xl">
        <span class="flex items-center justify-center w-10 h-10 bg-[#2a1414] rounded-full shadow shadow-[#ef4444bb]">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <rect x="8" y="8" width="8" height="6" rx="2" fill="#ef4444" stroke="none"/>
            <circle cx="12" cy="10" r="1.2" fill="#fff"/>
          </svg>
        </span>
        <div>
          <h1 class="text-xl font-extrabold text-white leading-none">AI Coach</h1>
          <span class="text-xs text-[#ef4444] font-semibold">Beta</span>
        </div>
      </div>

      <div ref="chatBox" class="flex-1 overflow-y-auto px-4 py-6 space-y-4 bg-transparent custom-scroll">
        <div
          v-for="(msg, i) in messages"
          :key="i"
          class="flex"
          :class="msg.user === 'user' ? 'justify-end' : 'justify-start'"
        >
          <div
            class="max-w-[80%] px-4 py-3 rounded-2xl shadow-sm text-base font-medium whitespace-pre-line transition-all duration-300"
            :class="msg.user === 'user' 
                ? 'bg-[#ef4444] text-white rounded-br-md' 
                : 'bg-neutral-800 text-[#ef4444] rounded-bl-md border border-neutral-700'" >
            {{ msg.text }}
          </div>
        </div>
        <div v-if="loading" class="flex justify-start">
          <div class="bg-neutral-800 text-neutral-400 px-4 py-3 rounded-2xl border border-neutral-700 animate-pulse">
            Digitando...
          </div>
        </div>
      </div>

      <form @submit.prevent="send" class="flex items-center gap-2 px-6 py-4 border-t border-neutral-800 bg-[#18181b] rounded-b-2xl">
        <input
          v-model="input"
          type="text"
          placeholder="Digite sua dúvida sobre treino, nutrição, rotina..."
          class="flex-1 bg-neutral-800 text-white px-4 py-3 rounded-xl border border-neutral-700 focus:border-[#ef4444] focus:ring-[#ef4444] focus:outline-none transition"
          autocomplete="off"
        />
        <button
          type="submit"
          class="bg-[#ef4444] hover:bg-[#d03131] text-white px-5 py-3 rounded-xl font-semibold transition"
          :disabled="loading || !input.trim()"
        >
          Enviar
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'

const messages = ref([
  { user: 'ai', text: '👋 Olá! Sou seu coach virtual. Tire dúvidas de treino, nutrição ou rotina!' }
])
const input = ref('')
const loading = ref(false)
const chatBox = ref(null)

async function send() {
  const text = input.value.trim()
  if (!text) return
  messages.value.push({ user: 'user', text })
  input.value = ''
  loading.value = true
  await nextTick()
  scrollToBottom()
  setTimeout(() => {
    messages.value.push({
      user: 'ai',
      text: respostaFake(text)
    })
    loading.value = false
    nextTick(scrollToBottom)
  }, 1300)
}

function scrollToBottom() {
  if (chatBox.value) chatBox.value.scrollTop = chatBox.value.scrollHeight
}

function respostaFake(text) {
  const low = text.toLowerCase()
  if (low.includes('quantas séries')) return 'Depende do objetivo! Para hipertrofia, 3-4 séries por exercício é um bom ponto de partida.'
  if (low.includes('cardio')) return 'O ideal é combinar treinos de força com cardio. Recomendo 2-3x por semana, conforme sua meta.'
  if (low.includes('dieta')) return 'Uma dieta equilibrada inclui proteínas, carboidratos, gorduras saudáveis, micronutrientes e hidratação adequada!'
  if (low.includes('descanso')) return 'O descanso é fundamental para a recuperação muscular. Durma bem e respeite os intervalos entre treinos.'
  return 'Ótima pergunta! Em breve vou aprender ainda mais. Me pergunte outra coisa ou especifique seu objetivo!'
}
</script>

<style scoped>
.custom-scroll {
  scrollbar-width: thin;
  scrollbar-color: #ef4444 #18181b;
}
.custom-scroll::-webkit-scrollbar {
  width: 8px;
}
.custom-scroll::-webkit-scrollbar-thumb {
  background: #ef4444;
  border-radius: 4px;
}
.custom-scroll::-webkit-scrollbar-track {
  background: #18181b;
}
</style>