<script setup lang="ts">
import { toRef } from "vue";

const props = defineProps({
  displayModal: Boolean,
});
let confirm = toRef(props, "displayModal");
</script>

<template>
  <q-dialog v-model="confirm" persistent>
    <q-card>
      <q-card-section class="row items-center">
        <span class="q-ml-sm">Are you sure you want to cancel your card?</span>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn
          flat
          label="No"
          color="primary"
          v-close-popup
          @click="$emit('onCancelAction')"
        />
        <q-btn
          flat
          label="Yes"
          color="primary"
          @click="$emit('onConfirmAction')"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style scoped></style>
