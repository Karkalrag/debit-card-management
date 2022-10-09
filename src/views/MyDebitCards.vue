<script setup lang="ts">
import { ref } from "vue";
import DebitCardActions from "@/components/DebitCardActions.vue";
import ConfirmCancelModal from "@/components/ConfirmCancelModal.vue";
import MainLayout from "@/layouts/MainLayout.vue";
import CardsHeader from "@/components/cards/CardsHeader.vue";
import CardTabs from "@/components/cards/CardTabs.vue";
import CardsCarousel from "@/components/cards/CardsCarousel.vue";
import MyTransactions from "@/components/MyTransactions.vue";
import CardDetails from "@/components/CardDetails.vue";

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

const isSelectedCardFrozen = () => {
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
  if (allDebitCards.value && allDebitCards.value.length > 0) {
    selectedCardId.value = allDebitCards.value[0].id;
    //TODO this is a temporary solution to move the carousel, need to do it via Vue/Quasar
    let element: HTMLElement = document.getElementsByClassName(
      "cards-carousel__control-button"
    )[1] as HTMLElement;
    element.click();
  }
  openCancelConfirm.value = false;
};
</script>

<template>
  <div class="my-debit-cards">
    <div class="my-debit-cards__top-section">
      <MainLayout>
        <CardsHeader />
        <CardTabs class="q-mt-lg" />
        <CardsCarousel
          :selected-card-id="selectedCardId"
          :all-debit-cards="allDebitCards"
          @onFocus="onFocus"
        />
        <ConfirmCancelModal
          :display-modal="openCancelConfirm"
          @onCancelAction="onCancelAction"
          @onConfirmAction="cancelDebitCard"
        />
      </MainLayout>
    </div>
    <div class="my-debit-cards__scrollable-sections">
      <DebitCardActions
        @onFreeze="handleFreeze"
        :debit-card-number="selectedCardId"
        :is-card-frozen="isSelectedCardFrozen()"
        @onCancel="onCancel"
      />
      <div class="my-debit-cards__expansion-sections-container q-py-md">
        <CardDetails />
        <MyTransactions />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/quasar.variables.scss";
.my-debit-cards-carousel {
  background: transparent;
}
.my-debit-cards__top-section {
  position: sticky;
  top: 0;
}
.my-debit-cards__scrollable-sections {
  background-color: $primary;
  position: relative;
  z-index: 10;
}
.my-debit-cards__expansion-sections-container {
  background-color: $white;
}
</style>
