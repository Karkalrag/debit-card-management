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
    class="my-debit-cards-carousel flex-center q-mt-lg"
    @transition="$emit('onFocus', currentCardId)"
  >
    <template v-slot:navigation-icon="{ active, onClick }">
      <q-btn
        class="cards-carousel__control-button"
        :style="{ opacity: active ? 1 : 0.2 }"
        dense
        rounded
        @click="onClick"
        id="carousel-btn"
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

<style scoped lang="scss">
.my-debit-cards-carousel {
  max-height: 16.625rem;
}
.cards-carousel__control-button {
  font-size: 0.25rem;
  background-color: #01d167;
}
</style>
