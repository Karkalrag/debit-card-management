<script setup lang="ts">
import helpers from "@/helpers/helpers";

const { isMobileScreen } = helpers();
</script>

<template>
  <div :class="`cards-header${isMobileScreen ? '' : '--desktop'}`">
    <div class="q-mb-sm text-weight-medium">Available balance</div>
    <div class="row items-center">
      <div class="cards-header__currency-icon text-weight-bold rounded-borders">
        S$
      </div>
      <div class="text-h5 text-weight-bolder q-ml-sm">3,000</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/quasar.variables.scss";
.cards-header {
  color: $white;
}
.cards-header--desktop {
  color: $text-dark;
}
.cards-header__currency-icon {
  color: $white;
  background-color: $secondary;
  padding: 0.125rem 0.75rem;
  font-size: 0.75rem;
  height: 100%;
}
</style>
