<script setup lang="ts">
import { ref, computed } from "vue";
import helpers from "@/helpers/helpers";
import { date } from "quasar";

const { isMobileScreen } = helpers();

const props = defineProps({
  cardHolderName: String,
  cardNumber: String,
  expiryDate: Date,
  color: String,
  isCardFrozen: Boolean,
});

const isCardNumberShown = ref(false);

const formattedCardNumber = computed(() => {
  if (props.cardNumber) {
    return props.cardNumber.replace(/\W/gi, "").replace(/(.{4})/g, "$1   ");
  }

  return "";
});

const formattedHiddenCardNumber = computed(() => {
  if (props.cardNumber) {
    const maskedNumber = props.cardNumber.replace(/\d(?=\d{4})/g, "*");

    return maskedNumber.replace(/\./gi, "").replace(/(.{4})/g, "$1   ");
  }

  return "";
});

const displayCardNumber = computed(() =>
  isCardNumberShown.value
    ? formattedCardNumber.value
    : formattedHiddenCardNumber.value
);

const formattedExpiryDate = computed(() =>
  date.formatDate(props.expiryDate, "MM / YY")
);
</script>

<template>
  <div class="debit-card" :class="{ 'debit-card--desktop': !isMobileScreen }">
    <div class="text-right" :style="{ opacity: props.isCardFrozen ? 0 : 1 }">
      <span
        class="debit-card__show-card-number inline bg-white row inline items-center"
        :style="{ color }"
        @click="isCardNumberShown = !isCardNumberShown"
      >
        <img
          class="debit-card__show-card-number__image q-mr-xs"
          src="../assets/eye.png"
        />
        {{ isCardNumberShown ? "Hide" : "Show" }} card number</span
      >
    </div>
    <q-card
      class="debit-card__container"
      :class="{ 'debit-card__container--desktop': !isMobileScreen }"
      :style="{ backgroundColor: color, opacity: props.isCardFrozen ? 0.2 : 1 }"
    >
      <q-card-section class="q-pa-lg column">
        <img
          src="@/assets/aspire-logo.png"
          class="debit-card__aspire-logo self-end"
        />

        <p
          class="debit-card__card-holder-name"
          :class="{ 'debit-card__card-holder-name--desktop': !isMobileScreen }"
        >
          {{ cardHolderName }}
        </p>
        <p class="debit-card__card-number">{{ displayCardNumber }}</p>
        <q-card flat class="debit-card__expiry-cvv-box">
          <q-card-section horizontal class="row">
            <p class="debit-card__expiry">Thru: {{ formattedExpiryDate }}</p>
            <q-space />
            <p class="debit-card__expiry">CVV: ***</p>
          </q-card-section>
        </q-card>

        <img
          src="@/assets/visa-logo.png"
          class="debit-card__visa-logo self-end"
        />
      </q-card-section>
    </q-card>
  </div>
</template>

<style scoped lang="scss">
.debit-card {
  width: 100%;
  max-width: 22.375rem;
  margin: 0 auto;
}
.debit-card--desktop {
  max-width: 25.625rem;
}
.debit-card__container {
  border-radius: 0.75rem;
}
.debit-card__container--desktop {
  max-width: 25.625rem;
}
.debit-card__aspire-logo,
.debit-card__visa-logo {
  height: 1.25rem;
  width: 4.375rem;
}

.debit-card__visa-logo {
  width: 4.125rem;
}

.debit-card__card-holder-name {
  font-size: 1.375rem;
  font-weight: bold;
  color: white;
}
.debit-card__card-holder-name--desktop {
  font-size: 1.5rem;
}

.debit-card__card-number {
  font-size: 14px;
  color: white;
  font-weight: bold;
}

.debit-card__expiry {
  font-size: 13px;
  font-weight: bold;
  color: white;
}

.debit-card__expiry-cvv-box {
  background: transparent;
  width: 50%;
}
.debit-card__show-card-number {
  font-size: 0.75rem;
  padding: 0.375rem 0.625rem 1rem;
  border-radius: 0.5rem 0.5rem 0 0;
  font-weight: 600;
  position: relative;
  top: 0.625rem;
}
.debit-card__show-card-number__image {
  width: 1rem;
  height: auto;
}
</style>
