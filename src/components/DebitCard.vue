<script setup lang="ts">
const props = defineProps({
  cardHolderName: String,
  cardNumber: String,
  expiryDate: String,
  color: String,
  isCardFrozen: Boolean,
});
</script>

<template>
  <q-card
    class="debit-card rounded-borders"
    :style="{ backgroundColor: color, opacity: props.isCardFrozen ? 0.2 : 1 }"
  >
    <q-card-section class="column">
      <img
        src="@/assets/aspire-logo.png"
        class="debit-card__aspire-logo self-end"
      />
      <q-card flat style="background-color: transparent">
        <q-card-section class="column q-px-md">
          <p class="debit-card__card-holder-name">{{ cardHolderName }}</p>
          <p class="debit-card__card-number">{{ cardNumber }}</p>
          <q-card flat class="debit-card__expiry-cvv-box">
            <q-card-section horizontal class="row">
              <p class="debit-card__expiry">Thru:{{ expiryDate }}</p>
              <q-space />
              <p class="debit-card__expiry">CVV:***</p>
            </q-card-section>
          </q-card>
        </q-card-section>
      </q-card>
      <img
        src="@/assets/visa-logo.png"
        class="debit-card__visa-logo self-end"
      />
    </q-card-section>
  </q-card>
</template>

<style scoped lang="scss">
.debit-card {
  width: 22.5rem;
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 20px;
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
</style>
