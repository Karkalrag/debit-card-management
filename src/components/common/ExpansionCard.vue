<template>
  <q-expansion-item
    expand-separator
    icon="img:src/assets/arrows-group.png"
    label="Recent transactions"
    class="expansion-card"
    expand-icon="img:src/assets/down-arrow.png"
  >
    <slot />
  </q-expansion-item>
</template>

<style scoped lang="scss">
@import "@/styles/quasar.variables.scss";
.expansion-card {
  background-color: $collapse-header-bg;
  color: $collapse-header-text;
  font-size: 0.875rem;
  font-weight: bold;
  border-radius: 0.3125rem;
  box-shadow: 0 0 0.5rem #0000000a;
}
</style>
