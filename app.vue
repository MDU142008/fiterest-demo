<template>
  <div>
    <SideMenu v-if="showMenu" class="hidden md:block" />
    <BottomMenu v-if="showMenu" class="md:hidden" />
    <NuxtPage />
  </div>
</template>

<script setup>
import SideMenu from '~/components/SideMenu.vue'
import BottomMenu from '~/components/BottomMenu.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
// Esconde menus em /login
const showMenu = computed(() => route.path !== '/login')
</script>