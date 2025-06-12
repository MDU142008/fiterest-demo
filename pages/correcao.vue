<template>
  <div class="min-h-screen bg-neutral-900 flex flex-col items-center py-8 px-2">
    <div class="w-full max-w-2xl bg-neutral-800 rounded-2xl shadow-xl p-8">
      <!-- Título -->
      <h1 class="text-2xl font-bold text-white mb-3">Correção de Vídeo</h1>
      <p class="text-neutral-300 mb-8">Envie um vídeo do seu exercício para receber feedback do AI coach.</p>
      
      <!-- Upload -->
      <label class="block w-full cursor-pointer mb-4">
        <input
          type="file"
          accept="video/*"
          class="hidden"
          @change="handleVideoUpload"
        />
        <div
          class="flex flex-col items-center justify-center border-2 border-dashed border-red-400 rounded-xl p-8 bg-neutral-900 hover:bg-neutral-700 transition min-h-[120px]"
        >
          <span v-if="!videoUrl" class="text-neutral-400">Clique aqui para enviar seu vídeo<br>
            <span class="text-xs text-neutral-500">(MP4, até 100 MB)</span>
          </span>
          <video
            v-if="videoUrl"
            :src="videoUrl"
            controls
            class="w-full max-w-xs mt-1 rounded-md shadow"
            style="max-height: 180px"
          ></video>
        </div>
      </label>

      <!-- Status -->
      <div v-if="status" class="text-xs text-red-400 mb-4">{{ status }}</div>

      <!-- Ações do vídeo enviado -->
      <div v-if="videoUrl" class="flex items-center gap-3 mb-6">
        <button
          class="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-bold shadow transition"
          @click="simulateFeedback"
        >
          Simular feedback
        </button>
        <button
          class="px-4 py-2 rounded-lg bg-neutral-700 hover:bg-neutral-600 text-neutral-200 shadow transition"
          @click="removeVideo"
        >
          Remover vídeo
        </button>
      </div>

      <!-- Feedback (simulado) -->
      <div v-if="videoUrl">
        <label class="block mb-1 text-neutral-200 font-medium">Feedback do Personal</label>
        <textarea
          class="w-full p-3 rounded-lg bg-neutral-950 border border-neutral-700 text-neutral-100 focus:outline-none focus:border-red-400 transition"
          rows="3"
          v-model="feedback"
          placeholder="Aqui aparecerá o feedback do personal trainer (simulado)"
          readonly
        ></textarea>
        <div class="flex justify-end mt-2">
          <button
            class="px-4 py-1 rounded bg-green-600 text-white text-sm font-semibold shadow hover:bg-green-700 transition"
            v-if="feedback"
            @click="markAsCorrected"
          >
            Marcar como corrigido
          </button>
        </div>
      </div>

      <!-- Histórico (mock) -->
      <div class="mt-10">
        <h2 class="text-lg font-semibold text-white mb-2">Seus envios anteriores</h2>
        <div v-if="mockHistory.length === 0" class="text-neutral-400 text-sm">
          Nenhum envio anterior ainda.
        </div>
        <div v-else class="flex flex-col gap-3">
          <div v-for="item in mockHistory" :key="item.id" class="bg-neutral-900 rounded-lg px-4 py-3 flex items-center justify-between">
            <div>
              <span class="font-medium text-neutral-200">{{ item.date }}</span>
              <span class="ml-3 text-xs text-neutral-400">{{ item.status }}</span>
            </div>
            <span class="text-xs text-neutral-400">Feedback: <span class="text-green-500">{{ item.feedbackPreview }}</span></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const videoUrl = ref(null)
const feedback = ref('')
const status = ref('')
const mockHistory = ref([
  { id: 1, date: '01/07/2025', status: 'Corrigido', feedbackPreview: 'Ajustar joelho...' },
  { id: 2, date: '25/06/2025', status: 'Corrigido', feedbackPreview: 'Ótima execução.' }
])

function handleVideoUpload(e) {
  const file = e.target.files[0]
  if (!file) return
  if (file.size > 100 * 1024 * 1024) { // 100 MB
    status.value = 'Arquivo muito grande (máx 100 MB).'
    return
  }
  videoUrl.value = URL.createObjectURL(file)
  feedback.value = ''
  status.value = 'Vídeo enviado! Aguarde feedback do personal.'
}

function removeVideo() {
  videoUrl.value = null
  feedback.value = ''
  status.value = ''
}

function simulateFeedback() {
  feedback.value = "Sua execução está muito boa!\nAtenção ao alinhamento do joelho na descida. Continue assim!"
  status.value = 'Feedback recebido!'
}

function markAsCorrected() {
  status.value = 'Correção marcada como concluída!'
  setTimeout(() => status.value = '', 2000)
}
</script>