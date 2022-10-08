<script setup lang="ts">
import { ref } from "vue";
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
let openCancelConfirm = ref(false);

// const onFocus = (newVal: any) => {
//   allDebitCards.value.forEach(function (card: any) {
//     if (card.number === newVal) {
//       selectedCard.value = card;
//     }
//   });
//   console.log(selectedCard.value, "selectedCard");
// };

const handleFreeze = (cardNumber: string) => {
  allDebitCards.value.forEach(function (card: any) {
    if (card.number === cardNumber) {
      card.isCardFrozen = !card.isCardFrozen;
      console.log(card, "frozenCard");
    }
  });
};

const onCancel = () => {
  openCancelConfirm.value = !openCancelConfirm.value;
  console.log(openCancelConfirm.value);
};
</script>

<template>
  <MainLayout>
    <CardsHeader />
    <CardTabs class="q-mt-lg" />
    <CardsCarousel
      :selected-card-id="selectedCardId"
      :all-debit-cards="allDebitCards"
    />
    <div class="q-pa-lg">
      <!-- <DebitCardActions
        @onFreeze="handleFreeze"
        :debit-card-number="selectedCard.number"
        :is-card-frozen="selectedCard.isCardFrozen"
        @onCancel="onCancel"
      /> -->
      <ConfirmCancelModal :display-modal="openCancelConfirm" />
    </div>
  </MainLayout>
</template>

<style lang="scss" scoped>
.my-debit-cards-carousel {
  background: transparent;
}
</style>
