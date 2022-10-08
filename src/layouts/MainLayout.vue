<script setup lang="ts">
import AppNavigator from "@/components/common/AppNavigation.vue";
</script>

<template>
  <main class="main-layout">
    <slot />
    <AppNavigator />
  </main>
</template>
