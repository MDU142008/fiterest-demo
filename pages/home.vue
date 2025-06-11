<template>
  <div class="min-h-screen flex bg-neutral-900">
    <SideMenu class="hidden md:flex" />
    <main class="flex-1 flex flex-col items-center px-6 py-10">
      <!-- Conteúdo central -->
    </main>
    <BottomMenu />
  </div>
</template>
<script setup>
import SideMenu from '@/components/SideMenu.vue'
import BottomMenu from '@/components/BottomMenu.vue'
</script>