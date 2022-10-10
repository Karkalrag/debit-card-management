<script setup lang="ts">
import { ref } from "vue";
import DebitCardActions from "@/components/DebitCardActions.vue";
import ConfirmCancelModal from "@/components/ConfirmCancelModal.vue";
import CardsHeader from "@/components/cards/CardsHeader.vue";
import CardTabs from "@/components/cards/CardTabs.vue";
import CardsCarousel from "@/components/cards/CardsCarousel.vue";
import MyTransactions from "@/components/MyTransactions.vue";
import CardDetails from "@/components/CardDetails.vue";
import helpers from "@/helpers/helpers";
import AddNewCardDialog from "../components/cards/AddNewCardDialog.vue";
import { date } from "quasar";

const { isMobileScreen } = helpers();
const { addToDate } = date;

const allDebitCards = ref([
  {
    id: 1,
    name: "Jack Reacher",
    number: "2213424342323232",
    expiresOn: new Date("12/12/22"),
    color: "#01D167",
    isCardFrozen: false,
  },
  {
    id: 2,
    name: "Jack 1",
    number: "9087425798649018",
    expiresOn: new Date("10/24/22"),
    color: "#536DFF",
    isCardFrozen: false,
  },
  {
    id: 3,
    name: "Jack 2",
    number: "1696701730771644",
    expiresOn: new Date("01/12/23"),
    color: "#01D167",
    isCardFrozen: false,
  },
]);

const isAddCardDialogVisible = ref(false);
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

const onAddNewCard = ({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName: string;
}) => {
  const newCardId = Number(Math.random().toString().slice(2, 4));
  const randomCardNumber = Math.random().toString().slice(2, 18);
  const randomExpiryDate = addToDate(new Date(), {
    months: newCardId,
  });
  const newCardToBeAdded = {
    id: newCardId,
    name: `${firstName} ${lastName}`,
    number: randomCardNumber,
    expiresOn: randomExpiryDate,
    color: "#01D167",
    isCardFrozen: false,
  };

  allDebitCards.value = [...allDebitCards.value, newCardToBeAdded];

  isAddCardDialogVisible.value = false;

  selectedCardId.value = newCardId;
};
</script>

<template>
  <div :class="`my-debit-cards${isMobileScreen ? '' : '--desktop'}`">
    <div
      :class="`my-debit-cards__top-section${
        isMobileScreen ? '' : '--desktop'
      } q-px-lg q-pt-lg q-pb-xs`"
    >
      <CardsHeader @add-new-card-dialog-shown="isAddCardDialogVisible = true" />
      <CardTabs class="q-mt-lg" />
      <CardsCarousel
        v-if="isMobileScreen"
        :selected-card-id="selectedCardId"
        :all-debit-cards="allDebitCards"
        @onFocus="onFocus"
      />
    </div>
    <div
      :class="`my-debit-cards__scrollable-sections${
        isMobileScreen ? '' : '--desktop'
      }`"
    >
      <div class="my-debit-cards__scrollable-sections--desktop__left-section">
        <CardsCarousel
          v-if="!isMobileScreen"
          :selected-card-id="selectedCardId"
          :all-debit-cards="allDebitCards"
          @onFocus="onFocus"
        />
        <DebitCardActions
          @onFreeze="handleFreeze"
          :debit-card-number="selectedCardId"
          :is-card-frozen="isSelectedCardFrozen()"
          @onCancel="onCancel"
        />
      </div>
      <div class="my-debit-cards__expansion-sections-container q-py-md">
        <CardDetails />
        <MyTransactions />
      </div>
    </div>
  </div>
  <ConfirmCancelModal
    :display-modal="openCancelConfirm"
    @onCancelAction="onCancelAction"
    @onConfirmAction="cancelDebitCard"
  />
  <q-dialog v-model="isAddCardDialogVisible">
    <AddNewCardDialog @new-card-added="onAddNewCard" />
  </q-dialog>
</template>

<style lang="scss" scoped>
@import "@/styles/quasar.variables.scss";
.my-debit-cards-carousel {
  background: transparent;
}
.my-debit-cards__top-section {
  position: sticky;
  top: 0;
  background-color: $primary;
}
.my-debit-cards__top-section--desktop {
  background-color: $white;
}
.my-debit-cards__scrollable-sections {
  background-color: $primary;
  position: relative;
  z-index: 10;
}
.my-debit-cards__scrollable-sections--desktop {
  background-color: white;
  display: flex;
  box-shadow: 0 0.125rem 0.75rem #00000014;
  padding: 2.5rem;
  .my-debit-cards__scrollable-sections--desktop__left-section {
    margin-right: 2.5rem;
  }
}
.my-debit-cards__expansion-sections-container {
  background-color: $white;
  justify-content: space-around;
  flex: 1;
}
.my-debit-cards__scrollable-sections--desktop__left-section {
  flex: 1;
}
.my-debit-cards--desktop {
  padding: 3.75rem;
}
</style>
