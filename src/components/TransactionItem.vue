<template>
  <q-card class="transaction-item q-pa-md row">
    <q-card-section class="q-pa-none">
      <div
        class="transaction-item__image-box flex-center"
        :style="{ background: categoryColor }"
      >
        <img
          :src="`src/assets/${categoryImage}.png`"
          class="transaction-item__image-box__image"
        />
      </div>
    </q-card-section>
    <q-card class="column">
      <p class="transaction-item__transaction-name q-mb-xs">
        {{ transactionName }}
      </p>
      <p class="transaction-item__transaction-date text-weight-regular">
        {{ transactionDate }}
      </p>
      <q-card-section class="row items-center" horizontal>
        <div class="transaction-item__image">
          <img src="../assets/business-and-finance.png" />
        </div>
        <p class="transaction-item__transaction-desc q-ma-none q-ml-sm">
          {{ transactionDesc }}
        </p>
      </q-card-section>
    </q-card>
    <q-space />
    <q-card-section class="row q-pa-xs cursor-pointer">
      <b
        :style="{ color: transactionType === 'cr' ? 'green' : 'black' }"
        class="transaction-item__currency"
      >
        {{ formattedTransactionAmount }}
      </b>
      <img src="../assets/next.png" class="transaction-item__next" />
    </q-card-section>
  </q-card>
  <q-separator class="q-mx-lg" color="light-grey" />
</template>

<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps({
  transactionName: String,
  transactionDate: String,
  transactionDesc: String,
  transactionType: String,
  currency: String,
  amount: String,
  categoryColor: String,
  categoryImage: String,
});

const formattedTransactionAmount = computed(
  () =>
    `${props.transactionType === "cr" ? "+  " : "-  "}${props.currency} ${
      props.amount
    }`
);
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
  margin-right: 0.75rem;
}

.transaction-item__image-box__image {
  width: 1rem;
  height: auto;
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
  margin-bottom: 0.75rem;
}

.transaction-item__transaction-desc {
  color: #325baf;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1;
}

.transaction-item__image {
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
