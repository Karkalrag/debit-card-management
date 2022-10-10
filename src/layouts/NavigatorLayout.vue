<script setup lang="ts">
import AppNavigator from "@/components/common/AppNavigation.vue";
import helpers from "@/helpers/helpers";

const { isMobileScreen } = helpers();
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
