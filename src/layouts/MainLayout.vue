<template>
  <main class="main-layout q-px-lg q-pt-lg q-pb-xs">
    <slot />
  </main>
</template>

<style scoped lang="scss">
@import "@/styles/quasar.variables.scss";
.main-layout {
  background-color: $primary;
}
</style>
