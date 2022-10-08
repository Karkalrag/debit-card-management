<script setup lang="ts">
import DebitCard from "@/components/DebitCard.vue";
import { ref } from "vue";

const allDebitCards = ref([
  {
    name: "Jack Reacher",
    number: "1212121212121212",
    expiresOn: "12/12",
    color: "#01D167",
  },
  {
    name: "Jack 1",
    number: "121212121212321212",
    expiresOn: "12/12",
    color: "red",
  },
  {
    name: "Jack 2",
    number: "121212121345343121212",
    expiresOn: "12/12",
    color: "blue",
  },
]);
</script>

<template>
  <DebitCard
    v-for="card in allDebitCards"
    :key="card.number"
    :card-holder-name="card.name"
    :card-number="card.number"
    :expiry-date="card.expiresOn"
    :color="card.color"
  />
</template>
