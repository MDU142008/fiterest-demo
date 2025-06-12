<template>
  <NuxtLayout>
    <template #default>
      <SideMenu class="hidden md:flex" />
      <BottomMenu class="md:hidden" />
      <NuxtPage />
    </template>
  </NuxtLayout>
</template>

<script setup>
import SideMenu from '@/components/SideMenu.vue'
import BottomMenu from '@/components/BottomMenu.vue'
</script>