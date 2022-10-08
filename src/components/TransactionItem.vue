<template>
  <q-card class="transaction-item q-pa-md row" bordered>
    <q-card-section>
      <div
        class="transaction-item__image-box flex-center"
        :style="{ background: logoColor }"
      >
        <img
          :src="'src/assets/' + image"
          class="transaction-item__image-box__image"
        />
      </div>
    </q-card-section>
    <q-space />
    <q-card class="column">
      <p class="transaction-item__transaction-name">{{ transactionName }}</p>
      <p class="transaction-item__transaction-date">{{ transactionDate }}</p>
      <q-card flat>
        <q-card-section class="row" horizontal>
          <div class="transactionDescImgBox">
            <img src="../assets/business-and-finance.png" />
          </div>
          <p class="transactionDesc">{{ transactionDesc }}</p>
        </q-card-section>
      </q-card>
    </q-card>
    <q-space />
    <q-card-section class="row q-pa-xs cursor-pointer">
      <b
        :style="{ color: debitOrCredit === 'cr' ? 'green' : 'black' }"
        class="transaction-item__currency"
      >
        {{ debitOrCredit === "cr" ? "+  " : "-  " }} {{ currency + " "
        }}{{ amount }}
      </b>
      <img src="../assets/next.png" class="transaction-item__next" />
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
defineProps({
  transactionName: String,
  transactionDate: String,
  transactionDesc: String,
  debitOrCredit: String,
  currency: String,
  amount: String,
  logoColor: String,
  image: String,
});
</script>

<style scoped lang="scss">
.transaction-item {
  background-color: white;
  width: 23.125rem;
}

.transaction-item__image-box {
  height: 50px;
  width: 50px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  flex-direction: row;
}

.transaction-item__image-box__image {
  width: 0.9375rem;
  height: 0.9375rem;
  text-align: center;
}

.transaction-item__transaction-name {
  font-size: 0.875rem;
  color: black;
  font-weight: 500;
}

.transaction-item__transaction-date {
  color: #aaaaaa;
  font-size: 0.8125rem;
  margin-top: -0.625rem;
}

.transactionDesc {
  color: #325baf;
  font-size: 0.75rem;
  font-weight: 500;
  margin-left: 0.625rem;
}

.transactionDescImgBox {
  width: 1.5rem;
  height: 1.25rem;
  border-radius: 0.625rem !important;
  background-color: #325baf;
  display: flex;
  align-items: center;
  padding-left: 7px;
}
.transaction-item__currency {
  font-weight: bold;
}
.transaction-item__next {
  width: 0.625rem;
  height: 0.625rem;
  margin-left: 0.625rem;
  margin-top: 0.3125rem;
}
</style>
