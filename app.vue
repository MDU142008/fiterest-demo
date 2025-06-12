<template>
  <div>
    <!-- Renderiza menus só se NÃO estiver na rota /login -->
    <SideMenu v-if="!isLoginPage" class="hidden md:flex" />
    <BottomMenu v-if="!isLoginPage" class="md:hidden" />
    <NuxtPage />
  </div>
</template>

<script setup>
import SideMenu from '@/components/SideMenu.vue'
import BottomMenu from '@/components/BottomMenu.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isLoginPage = computed(() => route.path === '/login')
</script>