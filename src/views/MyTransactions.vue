<script setup lang="ts">
import TransactionItem from "@/components/TransactionItem.vue";
import { ref } from "vue";

const myTransactions = ref([
  {
    transactionName: "Transaction 1",
    transactionDate: "20 May 2020",
    transactionDesc: "Refund on debit card",
    debitOrCredit: "cr",
    currency: "S$",
    amount: "100",
    logoColor: "#009DFF1A",
    image: "file-storage.png",
  },
  {
    transactionName: "Transaction 2",
    transactionDate: "20 May 2020",
    transactionDesc: "Refund on debit card",
    debitOrCredit: "cr",
    currency: "S$",
    amount: "100",
    logoColor: "#00D6B51A",
    image: "flights.png",
  },
  {
    transactionName: "Transaction 3",
    transactionDate: "20 May 2020",
    transactionDesc: "Refund on debit card",
    debitOrCredit: "dr",
    currency: "S$",
    amount: "100",
    logoColor: "#F251951A",
    image: "megaphone.png",
  },
  {
    transactionName: "Transaction 1",
    transactionDate: "20 May 2020",
    transactionDesc: "Refund on debit card",
    debitOrCredit: "cr",
    currency: "S$",
    amount: "100",
    logoColor: "#009DFF1A",
    image: "file-storage.png",
  },
]);
</script>

<template>
  <q-expansion-item
    expand-separator
    icon="img:src/assets/arrows-group.png"
    label="Recent transactions"
    class="my-transactions-header-style"
    expand-icon="img:src/assets/down-arrow.png"
  >
    <q-card class="column rounded-borders">
      <TransactionItem
        v-for="transaction in myTransactions"
        :transaction-name="transaction.transactionName"
        :transaction-date="transaction.transactionDate"
        :transaction-desc="transaction.transactionDesc"
        :debit-or-credit="transaction.debitOrCredit"
        :currency="transaction.currency"
        :amount="transaction.amount"
        :logo-color="transaction.logoColor"
        :image="transaction.image"
      />
    </q-card>
    <q-card
      class="column my-transactions-all-transactions-btn flex-center cursor-pointer"
    >
      View all card transactions
    </q-card>
  </q-expansion-item>
</template>

<style scoped lang="scss">
@import "../styles/quasar.variables.scss";
.my-transactions-header-style {
  width: 23.125rem;
  background-color: $collapse-header-bg;
  color: $collapse-header-text;
  font-size: 0.875rem;
  font-weight: bold;
  border-radius: 0.3125rem;
  box-shadow: 0 0 0.5rem #0000000a;
}

.my-transactions-all-transactions-btn {
  background-color: $all-action-btn-bg;
  height: 3.125rem;
  color: $all-action-btn-text;
  font-size: 0.8125rem;
  font-weight: 500;
  border-radius: 0.625rem !important;
}
</style>
