<script setup lang="ts">
import { ref } from "vue";
import type { DebitCard as DebitCardType } from "@/types/types";
import DebitCard from "@/components/DebitCard.vue";

type Props = {
  selectedCardId: number;
  allDebitCards: DebitCardType[];
};

const props = defineProps<Props>();

const currentCardId = ref(props.selectedCardId);
</script>

<template>
  <q-carousel
    animated
    v-model="currentCardId"
    navigation
    swipeable
    infinite
    transition-prev="slide-right"
    transition-next="slide-left"
    class="my-debit-cards-carousel flex-center"
  >
    <template v-slot:navigation-icon="{ active, onClick }">
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
    <q-carousel-slide
      v-for="card in allDebitCards"
      :key="card.number"
      :name="card.id"
      class="flex-center"
    >
      <DebitCard
        :key="card.number"
        :card-holder-name="card.name"
        :card-number="card.number"
        :expiry-date="card.expiresOn"
        :color="card.color"
        :is-card-frozen="card.isCardFrozen"
      />
    </q-carousel-slide>
  </q-carousel>
</template>
