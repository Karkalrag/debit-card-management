<script setup lang="ts">
defineProps({
  title: String,
  icon: String,
});
</script>

<template>
  <div class="mobile-nav-item text-center">
    <img
      class="mobile-nav-item__icon"
      :src="`/assets/icons/navigation/${icon}.png`"
    />
    <div>{{ title }}</div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/quasar.variables.scss";
.mobile-nav-item {
  font-size: 0.5625rem;
  color: $mobile-nav-button-default;
  text-transform: capitalize;
}

.mobile-nav-item__icon {
  height: 1.5rem;
  width: 1.5rem;
  object-fit: contain;
}
</style>
