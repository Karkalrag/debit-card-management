<script setup lang="ts">
import AppNavigator from "@/components/common/AppNavigation.vue";
import { useQuasar } from "quasar";
import { computed } from "vue";

const $q = useQuasar();
const isMobileScreen = computed(() => $q.screen.lt.md);
</script>

<template>
  <main :class="`navigator-layout--${isMobileScreen ? 'mobile' : 'desktop'}`">
    <slot />
    <AppNavigator />
  </main>
</template>

<style scoped lang="scss">
.navigator-layout--mobile {
  padding-bottom: 4rem;
}

.navigator-layout--desktop {
  padding-left: 21.25rem;
}
</style>
