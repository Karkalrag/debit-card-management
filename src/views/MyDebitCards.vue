<script setup lang="ts">
import DebitCard from "@/components/DebitCard.vue";
import { ref } from "vue";

const allDebitCards = ref([
  {
    name: "Jack Reacher",
    number: "1212121212121212aa",
    expiresOn: "12/12",
    color: "#01D167",
  },
  {
    name: "Jack 1",
    number: "121212121212321212bb",
    expiresOn: "12/12",
    color: "red",
  },
  {
    name: "Jack 2",
    number: "121212121345343121212cc",
    expiresOn: "12/12",
    color: "blue",
  },
]);
const defaultCard = ref(allDebitCards.value[0].number);
</script>

<template>
  <div class="q-pa-lg">
    <q-carousel
      animated
      v-model="defaultCard"
      navigation
      infinite
      swipeable
      class="my-debit-cards-carousel"
    >
      <template v-slot:navigation-icon="{ active, btnProps, onClick }">
        <q-btn
          v-if="active"
          style="background: #01d167; opacity: 1"
          size="xs"
          dense
          round
          rounded
        />
        <q-btn
          v-else
          style="background: #01d167; opacity: 0.1"
          round
          size="xs"
          dense
          @click="onClick"
        />
      </template>
      <q-carousel-slide v-for="card in allDebitCards" :name="card.number">
        <DebitCard
          :key="card.number"
          :card-holder-name="card.name"
          :card-number="card.number"
          :expiry-date="card.expiresOn"
          :color="card.color"
        />
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<style lang="scss" scoped>
.my-debit-cards-carousel {
  background: transparent;
}
</style>
