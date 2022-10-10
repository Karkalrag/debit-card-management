<script setup lang="ts">
import MobileNavItem from "@/components/common/MobileNavItem.vue";
import { computed } from "vue";
import { useRouter } from "vue-router";
import DesktopNavigator from "@/components/common/DesktopNavigator.vue";
import helpers from "@/helpers/helpers";

const router = useRouter();

const { isMobileScreen } = helpers();
const navList = computed(() => {
  return router.options.routes.map(({ name, path }) => ({
    name,
    path,
    icon: name,
  }));
});
</script>

<template>
  <nav
    v-if="isMobileScreen"
    class="app-navigation--mobile row justify-between q-px-lg q-py-md fixed"
  >
    <MobileNavItem
      v-for="navItem in navList"
      :key="navItem.name"
      :title="String(navItem.name)"
      :icon="String(navItem.icon)"
    />
  </nav>
  <DesktopNavigator
    v-else
    :nav-list="navList"
    class="app-navigation--desktop"
  />
</template>

<style scoped lang="scss">
@import "@/styles/quasar.variables.scss";
.app-navigation--mobile {
  background-color: $white;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9999;
  box-shadow: 0 -0.1875rem 0.375rem #00000014;
}
</style>
