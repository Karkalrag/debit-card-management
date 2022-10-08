<script setup lang="ts">
import AppNavigator from "@/components/common/AppNavigation.vue";
</script>

<template>
  <main class="main-layout q-pa-lg">
    <slot />
    <AppNavigator />
  </main>
</template>

<style scoped lang="scss">
@import "@/styles/quasar.variables.scss";
.main-layout {
  background-color: $primary;
}
</style>
