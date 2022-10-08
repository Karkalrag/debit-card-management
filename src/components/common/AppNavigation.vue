<script setup lang="ts">
import MobileNavItem from "@/components/common/MobileNavItem.vue";
import { computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const navList = computed(() => {
  return router.options.routes.map(({ name, path }) => ({
    name,
    path,
    icon: name,
  }));
});
</script>

<template>
  <nav class="app-navigation--mobile row justify-between q-px-lg q-py-md fixed">
    <MobileNavItem
      v-for="navItem in navList"
      :key="navItem.name"
      :title="String(navItem.name)"
      :icon="String(navItem.icon)"
    />
  </nav>
</template>

<style scoped lang="scss">
.app-navigation--mobile {
  left: 0;
  bottom: 0;
  right: 0;
}
</style>
