<template>
  <div class="min-h-screen bg-neutral-900 text-white flex flex-col items-center py-8">
    <h1 class="text-3xl font-bold mb-8">Meus Clientes</h1>
    <div class="w-full max-w-xl space-y-4">
      <div
        v-for="client in clients"
        :key="client.id"
        class="flex items-center justify-between bg-neutral-800 rounded-xl p-5 shadow hover:bg-neutral-700 transition"
      >
        <div>
          <div class="font-semibold text-lg">{{ client.name }}</div>
          <div class="text-neutral-400 text-sm">Objetivo: {{ client.goal }}</div>
        </div>
        <button
          class="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-bold shadow transition"
          @click="viewClient(client.id)"
        >
          Ver perfil
        </button>
      </div>
      <!-- Caso não tenha clientes -->
      <div v-if="clients.length === 0" class="text-neutral-400 text-center">
        Nenhum cliente cadastrado.
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const clients = ref([
  { id: 1, name: 'João Silva', goal: 'Hipertrofia' },
  { id: 2, name: 'Maria Souza', goal: 'Emagrecimento' },
  // Adicione mais clientes fictícios se quiser
])

function viewClient(id) {
  // Aqui você pode navegar para /trainer/client/:id ou abrir um modal (mock)
  alert('Abrir perfil do cliente: ' + id)
}
</script>