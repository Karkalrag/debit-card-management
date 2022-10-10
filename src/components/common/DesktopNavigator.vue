<script setup lang="ts">
import type { RouteRecordName } from "vue-router";
import DesktopNavItem from "./DesktopNavItem.vue";
type NavListItem = {
  name: RouteRecordName | undefined;
  path: string;
  icon: RouteRecordName | undefined;
};

type Props = {
  navList: NavListItem[];
};

defineProps<Props>();
</script>

<template>
  <div class="desktop-navigator q-pa-xl fixed">
    <img
      class="desktop-navigator__app-logo q-mb-md"
      src="@/assets/logo-main.png"
    />
    <p class="desktop-navigator__app-subtitle">
      Trusted way of banking for 3,000+ SMEs and startups in Singapore
    </p>
    <nav>
      <template v-for="navItem in navList" :key="navItem.name">
        <DesktopNavItem
          :title="`${String(navItem.name)}`"
          :icon="`${String(navItem.icon)}`"
        />
      </template>
    </nav>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/quasar.variables.scss";
.desktop-navigator {
  left: 0;
  bottom: 0;
  top: 0;
  width: 21.25rem;
  z-index: 9999;
  background-color: $primary;
}
.desktop-navigator__app-logo {
  width: 7.8125rem;
  height: auto;
}
.desktop-navigator__app-subtitle {
  font-size: 0.9375rem;
  color: $white;
  opacity: 0.3;
  margin-bottom: 5rem;
}
</style>
