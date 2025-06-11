<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-[#111]">
    <!-- Logo bem grande -->
    <img
      src="/logo.png"
      alt="Fiterest Logo"
      class="w-40 h-40 mb-8 drop-shadow-[0_4px_30px_rgba(255,0,0,0.35)] transition-all"
      draggable="false"
    />

    <h1 class="text-4xl md:text-5xl font-extrabold tracking-wide text-white mb-1">
      FITEREST
    </h1>
    <span class="text-[#EF4444] text-lg font-semibold mb-10 tracking-widest">
      Semper Altius
    </span>

    <!-- Card de login -->
    <div class="bg-[#222] bg-opacity-95 rounded-2xl shadow-xl px-8 py-8 w-full max-w-sm">
      <h2 class="text-white text-2xl font-semibold mb-8 text-center">
        Entrar como
      </h2>
      <div class="flex flex-col gap-4">
        <button
          @click="navigate('training')"
          class="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-neutral-700 bg-neutral-900 text-white font-semibold text-lg hover:border-[#ef4444] hover:bg-[#18181b] hover:shadow-[0_0_24px_#ef444460] transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 stroke-[#ef4444]" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M5 12h14M12 5v14"/></svg>
          Plano de Treinamento
        </button>
        <button
          @click="navigate('trainer')"
          class="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-neutral-700 bg-neutral-900 text-white font-semibold text-lg hover:border-[#ef4444] hover:bg-[#18181b] hover:shadow-[0_0_24px_#ef444460] transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 stroke-[#ef4444]" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" stroke="currentColor" stroke-width="2"/><path stroke="currentColor" stroke-width="2" d="M4 20c0-4 4-7 8-7s8 3 8 7"/></svg>
          Personal Trainer
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function navigate(role) {
  if (role === 'training') {
    router.push('/training')
  } else if (role === 'trainer') {
    router.push('/trainer')
  }
}
</script>