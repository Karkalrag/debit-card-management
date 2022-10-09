<script setup lang="ts">
import { ref } from "vue";
const props = defineProps({
  isCardFrozen: Boolean,
  debitCardId: Number,
});

defineEmits(["onFreeze", "onClick", "onCancel"]);

const allActions = ref([
  {
    name: props.isCardFrozen ? "Un-Freeze card" : "Freeze card",
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
  <q-btn-group spread rounded class="debit-card-actions">
    <q-btn
      v-for="action in allActions"
      :key="action.name"
      :label="action.name"
      :icon="'img:src/assets/' + action.icon + '.png'"
      no-caps
      class="debit-card-action__action-text"
      :disable="action.name !== 'Freeze card' && props.isCardFrozen"
      @click="$emit(action.emit)"
    />
  </q-btn-group>
</template>

<style scoped lang="scss">
@import "../styles/quasar.variables.scss";

.debit-card-actions {
  background-color: $actions-bg;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.debit-card-action__action-text {
  color: $primary;
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
