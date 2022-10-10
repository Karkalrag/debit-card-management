<template>
  <main class="main-layout q-pa-lg">
    <slot />
  </main>
</template>

<style scoped lang="scss">
@import "@/styles/quasar.variables.scss";
.main-layout {
  background-color: $primary;
}
</style>
