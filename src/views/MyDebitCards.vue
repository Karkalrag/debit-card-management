<script setup lang="ts">
import { onMounted, ref } from "vue";
import DebitCardActions from "@/components/DebitCardActions.vue";
import ConfirmCancelModal from "@/components/ConfirmCancelModal.vue";
import MainLayout from "@/layouts/MainLayout.vue";
import CardsHeader from "@/components/cards/CardsHeader.vue";
import CardTabs from "../components/cards/CardTabs.vue";
import CardsCarousel from "../components/cards/CardsCarousel.vue";

const allDebitCards = ref([
  {
    id: 1,
    name: "Jack Reacher",
    number: "1111111111111111",
    expiresOn: "12/12",
    color: "#01D167",
    isCardFrozen: false,
  },
  {
    id: 2,
    name: "Jack 1",
    number: "2222222222222222",
    expiresOn: "12/12",
    color: "#536DFF",
    isCardFrozen: false,
  },
  {
    id: 3,
    name: "Jack 2",
    number: "3333333333333333",
    expiresOn: "12/12",
    color: "#01D167",
    isCardFrozen: false,
  },
]);
const selectedCardId = ref(1);
const openCancelConfirm = ref(false);

const onFocus = (newVal: any) => {
  allDebitCards.value.forEach(function (card: any) {
    if (card.id === newVal) {
      selectedCardId.value = card.id;
    }
  });
};

const isSelectedCardForzen = () => {
  let isFrozen = false;
  allDebitCards.value.forEach(function (card: any) {
    if (card.id === selectedCardId.value) {
      isFrozen = card.isCardFrozen;
    }
  });
  return isFrozen;
};

const handleFreeze = () => {
  allDebitCards.value.forEach(function (card: any) {
    if (card.id === selectedCardId.value) {
      card.isCardFrozen = !card.isCardFrozen;
    }
  });
};

const onCancel = () => {
  openCancelConfirm.value = true;
};
const onCancelAction = () => {
  openCancelConfirm.value = false;
};
const cancelDebitCard = () => {
  let cardIndex = 0;
  allDebitCards.value.forEach(function (card: any, index: number) {
    if (card.id === selectedCardId.value) {
      cardIndex = index;
    }
  });
  allDebitCards.value.splice(cardIndex, 1);
  selectedCardId.value = allDebitCards.value[0].id;
  openCancelConfirm.value = false;
};
</script>

<template>
  <MainLayout>
    <CardsHeader />
    <CardTabs class="q-mt-lg" />
    <CardsCarousel
      :selected-card-id="selectedCardId"
      :all-debit-cards="allDebitCards"
      @onFocus="onFocus"
    />
    <div class="q-pa-lg">
      <DebitCardActions
        @onFreeze="handleFreeze"
        :debit-card-number="selectedCardId"
        :is-card-frozen="isSelectedCardForzen()"
        @onCancel="onCancel"
      />
      <ConfirmCancelModal
        :display-modal="openCancelConfirm"
        @onCancelAction="onCancelAction"
        @onConfirmAction="cancelDebitCard"
      />
    </div>
  </MainLayout>
</template>

<style lang="scss" scoped>
.my-debit-cards-carousel {
  background: transparent;
}
</style>
