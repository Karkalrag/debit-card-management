<script setup lang="ts">
import DebitCard from "@/components/DebitCard.vue";
import { ref } from "vue";
import DebitCardActions from "../components/DebitCardActions.vue";
import ConfirmCancelModal from "../components/ConfirmCancelModal.vue";

let allDebitCards = ref([
  {
    name: "Jack Reacher",
    number: "1111111111111111",
    expiresOn: "12/12",
    color: "#01D167",
    isCardFrozen: false,
  },
  {
    name: "Jack 1",
    number: "2222222222222222",
    expiresOn: "12/12",
    color: "#536DFF",
    isCardFrozen: false,
  },
  {
    name: "Jack 2",
    number: "3333333333333333",
    expiresOn: "12/12",
    color: "#01D167",
    isCardFrozen: false,
  },
]);
const defaultCard = ref(allDebitCards.value[0].number);
const selectedCard = ref(allDebitCards.value[0]);
let openCancelConfirm = ref(false);

const onFocus = (newVal: any) => {
  allDebitCards.value.forEach(function (card: any) {
    if (card.number === newVal) {
      selectedCard.value = card;
    }
  });
  console.log(selectedCard.value, "selectedCard");
};

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
  <div class="q-pa-lg">
    <q-carousel
      animated
      v-model="defaultCard"
      navigation
      infinite
      swipeable
      class="my-debit-cards-carousel flex-center"
      @transition="
        (newVal, oldVal) => {
          onFocus(newVal);
        }
      "
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
      <q-carousel-slide
        v-for="card in allDebitCards"
        :name="card.number"
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
    <DebitCardActions
      @onFreeze="handleFreeze"
      :debit-card-number="selectedCard.number"
      :is-card-frozen="selectedCard.isCardFrozen"
      @onCancel="onCancel"
    />
    <ConfirmCancelModal :display-modal="openCancelConfirm" />
  </div>
</template>

<style lang="scss" scoped>
.my-debit-cards-carousel {
  background: transparent;
}
</style>
