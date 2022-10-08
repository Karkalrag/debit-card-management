<script setup lang="ts">
defineProps({
  cardHolderName: String,
  cardNumber: String,
  expiryDate: String,
});
</script>

<template>
  <q-card class="my-card">
    <q-card-section> test </q-card-section>
  </q-card>
  <div class="card">
    <div></div>
    <div class="cardContent">
      <p class="cardHolderName">{{ cardHolderName }}</p>
      <p class="cardNumber">{{ cardNumber }}</p>
      <div class="dateAndCVVDiv">
        <p class="expiry">Thru:{{ expiryDate }}</p>
        <p class="expiry">CVV:***</p>
      </div>
    </div>
    <div></div>
  </div>
</template>

<style scoped>
.card {
  width: 360px;
  height: 220px;
  border-radius: 10px;
  background-color: #01d167;
  padding: 25px;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}

.cardContent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 20px;
}

img {
  height: 20px;
  width: 70px;
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
