<script setup lang="ts">
import helpers from "@/helpers/helpers";
import AddNewCardButton from "../common/AddNewCardButton.vue";

const { isMobileScreen } = helpers();

defineEmits(["add-new-card-dialog-shown"]);
</script>

<template>
  <div
    class="cards-header flex justify-between"
    :class="{ 'cards-header--desktop': !isMobileScreen }"
  >
    <div>
      <div class="q-mb-sm text-weight-medium">Available balance</div>
      <div class="row items-center">
        <div
          class="cards-header__currency-icon text-weight-bold rounded-borders"
        >
          S$
        </div>
        <div class="text-h5 text-weight-bolder q-ml-sm">3,000</div>
      </div>
    </div>
    <AddNewCardButton @click="$emit('add-new-card-dialog-shown')" />
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
