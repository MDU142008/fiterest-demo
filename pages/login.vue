<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-white text-black px-4">
    <!-- Logo + nome -->
    <div class="text-center mb-8">
      <img src="/logo.png" alt="Logo Fiterest" class="h-20 mx-auto mb-4" />
      <div class="text-4xl font-bold tracking-wide">FITEREST</div>
      <div class="text-sm text-gray-600 italic">Semper Altius</div>
    </div>
    <!-- Acesso rápido -->
    <div class="bg-white border border-gray-200 shadow-md rounded-lg p-6 w-full max-w-sm text-center">
      <h2 class="text-2xl font-semibold mb-6">Entrar como</h2>
      <div class="flex flex-col gap-4">
        <NuxtLink
          to="/training"
          class="w-full bg-[#E63946] text-white py-3 rounded text-lg font-semibold shadow hover:bg-[#d62828] transition"
        >
          Plano de Treinamento
        </NuxtLink>
        <NuxtLink
          to="/trainer"
          class="w-full border border-black text-black py-3 rounded text-lg font-semibold shadow hover:bg-gray-100 transition"
        >
          Personal Trainer
        </NuxtLink>
      </div>
    </div>
  </div>
</template>