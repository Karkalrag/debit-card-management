<script setup lang="ts">
import helpers from "@/helpers/helpers";

const { isMobileScreen } = helpers();
</script>

<template>
  <q-btn
    class="add-new-card-button text-weight-bold q-pa-none"
    flat
    no-caps
    :class="{ 'add-new-card-button--desktop': !isMobileScreen }"
  >
    <img
      class="add-new-card-button__icon"
      :src="`/assets/icons/actions/add-${
        isMobileScreen ? 'mobile' : 'desktop'
      }.png`"
    />
    <div class="q-ml-sm">New card</div>
  </q-btn>
</template>

<style scoped lang="scss">
@import "@/styles/quasar.variables.scss";
.add-new-card-button {
  color: $tabblue;
  display: flex;
}
.add-new-card-button--desktop {
  color: $white;
  background-color: $primary;
  padding: 0.5rem 0.75rem;
  height: 2.25rem;
}
.add-new-card-button__icon {
  width: 1rem;
  height: 1rem;
}
</style>
