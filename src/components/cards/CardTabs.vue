<script setup lang="ts">
import { ref } from "vue";

const tab = ref("my-cards");
</script>

<template>
  <q-tabs v-model="tab" class="text-white inline" indicator-color="tabblue">
    <q-tab no-caps name="my-cards" class="q-px-none">
      <div class="text-weight-bolder">My debit cards</div>
    </q-tab>
    <q-tab
      no-caps
      name="all-cards"
      class="q-px-none q-ml-lg text-weight-bolder"
    >
      <div class="text-weight-bolder">All company cards</div>
    </q-tab>
  </q-tabs>
</template>
