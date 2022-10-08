<script setup lang="ts">
defineProps({
  cardHolderName: String,
  cardNumber: String,
  expiryDate: String,
  color: String,
});
</script>

<template>
  <q-card
    class="debit-card rounded-borders"
    :style="{ backgroundColor: color }"
  >
    <q-card-section class="column">
      <img
        src="@/assets/aspire-logo.png"
        class="debit-card__aspire-logo self-end"
      />
      <div class="cardContent">
        <p class="cardHolderName">{{ cardHolderName }}</p>
        <p class="cardNumber">{{ cardNumber }}</p>
        <div class="dateAndCVVDiv">
          <p class="expiry">Thru:{{ expiryDate }}</p>
          <p class="expiry">CVV:***</p>
        </div>
      </div>
      <img src="@/assets/visa-logo.png" class="debit-card__visa-logo" />
    </q-card-section>
  </q-card>
</template>

<style scoped>
.debit-card {
  width: 22.5rem;
}

.cardContent {
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

.cardHolderName {
  font-size: 22px;
  font-weight: bold;
  color: white;
}

.cardNumber {
  font-size: 14px;
  color: white;
  font-weight: bold;
  margin-top: 20px;
}

.dateAndCVVDiv {
  width: 250px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: -14px;
}

.expiry {
  font-size: 13px;
  font-weight: bold;
  color: white;
  margin-top: 20px;
}
</style>
