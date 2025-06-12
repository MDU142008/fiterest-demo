<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-[#111] pt-10">
    <div class="bg-[#1a1a1a] rounded-2xl shadow-xl px-8 py-10 w-full max-w-md flex flex-col items-center">
      <!-- Avatar -->
      <div class="mb-6">
        <img
          src="https://ui-avatars.com/api/?name=User&background=ef4444&color=fff&size=128"
          alt="Foto de perfil"
          class="w-28 h-28 rounded-full border-4 border-[#ef4444] shadow"
        />
      </div>
      <!-- Dados do usuário -->
      <div class="text-center space-y-2 mb-8">
        <h2 class="text-2xl font-bold text-white">Santiago P. (Exemplo)</h2>
        <p class="text-[#ef4444] font-semibold text-sm">Usuário Premium</p>
        <p class="text-neutral-300 text-base">santiago@email.com</p>
        <p class="text-neutral-400 text-sm">ID: 123456</p>
      </div>
      <!-- Botão editar -->
      <button
        class="mt-4 w-full py-2 rounded-xl bg-[#ef4444] text-white font-bold text-lg hover:bg-[#b91c1c] transition-all"
      >
        Editar Perfil
      </button>
    </div>
  </div>
</template>

<script setup>
// Futuramente pode adicionar lógica para edição, upload da foto, etc.
</script>