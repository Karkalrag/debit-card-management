<script setup lang="ts">
import { computed, ref } from "vue";
import helpers from "@/helpers/helpers";
const props = defineProps({
  isCardFrozen: Boolean,
  debitCardId: Number,
});

defineEmits(["onFreeze", "onClick", "onCancel"]);

const { isMobileScreen } = helpers();

const freezeCardName = computed(() => {
  return props.isCardFrozen ? "Un-Freeze card" : "Freeze card";
});

const allActions = ref([
  {
    name: freezeCardName,
    icon: "freeze-card",
    emit: "onFreeze",
  },
  {
    name: "Set spend limit",
    icon: "spend-limit",
    emit: "onClick",
  },
  {
    name: "Add to GPay",
    icon: "gpay",
    emit: "onClick",
  },
  {
    name: "Replace card",
    icon: "deactivate-card",
    emit: "onClick",
  },
  {
    name: "Cancel card",
    icon: "replace-card",
    method: "cancelCard",
    emit: "onCancel",
  },
]);
</script>

<template>
  <q-btn-group
    flat
    spread
    rounded
    class="debit-card-actions justify-around q-pa-md"
    :class="{ 'debit-card-actions--desktop': !isMobileScreen }"
  >
    <q-btn
      v-for="action in allActions"
      :key="action.name"
      no-caps
      class="debit-card-actions__button"
      :disable="action.name !== freezeCardName && props.isCardFrozen"
      @click="$emit(action.emit)"
    >
      <img :src="`/assets/icons/actions/${action.icon}.png`" class="q-mb-sm" />
      <div class="debit-card-actions__button__label">{{ action.name }}</div>
    </q-btn>
  </q-btn-group>
</template>

<style scoped lang="scss">
@import "../styles/quasar.variables.scss";

.debit-card-actions {
  background-color: $actions-bg;
  border-radius: 1rem;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.debit-card-actions--desktop {
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  max-width: 25.625rem;
  margin: 0 auto;
}

.debit-card-actions__button {
  color: $primary;
  padding: 0;
  font-size: 0.75rem;
  width: 100% !important;
  max-width: 3.75rem !important;
}

.debit-card-actions__button__label {
  line-height: 1.4;
}

.debit-card-action__image-box {
  height: 50px;
  width: 50px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  flex-direction: row;
}

.debit-card-action__image-box__image {
  width: 2rem;
  height: 2rem;
  text-align: center;
}
</style>
