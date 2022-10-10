<script setup lang="ts">
defineProps({
  title: String,
  icon: String,
});
</script>

<template>
  <div class="desktop-nav-item row items-center">
    <img
      class="desktop-nav-item__icon q-mr-sm"
      :src="`/assets/icons/navigation/${icon}.png`"
    />
    <div>{{ title }}</div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/quasar.variables.scss";
.desktop-nav-item {
  font-size: 0.5625rem;
  color: $mobile-nav-button-default;
  text-transform: capitalize;
  font-size: 1rem;
  margin-bottom: 60px;
}

.desktop-nav-item__icon {
  height: 1.5rem;
  width: 1.5rem;
  object-fit: contain;
}
</style>
