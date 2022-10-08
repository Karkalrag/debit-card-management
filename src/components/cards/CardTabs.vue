<script setup lang="ts">
import { ref } from "vue";

const tab = ref("my-cards");
</script>

<template>
  <q-tabs v-model="tab" class="text-white inline" indicator-color="tabblue">
    <q-tab no-caps name="my-cards" label="My debit cards" class="q-px-none" />
    <q-tab
      no-caps
      name="all-cards"
      label="All company cards"
      class="q-px-none q-ml-lg"
    />
  </q-tabs>
</template>
