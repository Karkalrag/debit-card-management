<script setup lang="ts">
defineProps({
  cardIcon: String,
  label: String,
  defaultExpanded: Boolean,
});
</script>
<template>
  <q-expansion-item
    :default-opened="defaultExpanded"
    :icon="`img:/assets/icons/${cardIcon}.png`"
    :label="label"
    class="expansion-card q-mx-md q-mb-md"
    expand-icon="img:/assets/icons/down-arrow.png"
    header-class="expansion-card__header"
  >
    <slot />
  </q-expansion-item>
</template>

<style lang="scss">
@import "@/styles/quasar.variables.scss";
.expansion-card {
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 0.3125rem;
  box-shadow: 0 0 0.5rem #0000000a;
  border: 1px solid #f0f0f0;
}
.expansion-card__header {
  background-color: black;
  background-color: $collapse-header-bg;
  color: $collapse-header-text;
}
</style>
