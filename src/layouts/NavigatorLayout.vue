<script setup lang="ts">
import AppNavigator from "@/components/common/AppNavigation.vue";
</script>

<template>
  <main class="navigator-layout">
    <slot />
    <AppNavigator />
  </main>
</template>

<style scoped lang="scss">
.navigator-layout {
  padding-bottom: 4rem;
}
</style>
