<script setup lang="ts">
import TransactionItem from "@/components/TransactionItem.vue";
import { ref } from "vue";
import ExpansionCard from "@/components/common/ExpansionCard.vue";

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
  <ExpansionCard label="Recent Transactions" card-icon="arrows-group">
    <q-card class="column rounded-borders">
      <TransactionItem
        v-for="transaction in myTransactions"
        :key="transaction.transactionDate"
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
  </ExpansionCard>
</template>

<style scoped lang="scss">
@import "@/styles/quasar.variables.scss";

.my-transactions-all-transactions-btn {
  background-color: $all-action-btn-bg;
  height: 3.125rem;
  color: $all-action-btn-text;
  font-size: 0.8125rem;
  font-weight: 500;
  border-radius: 0.625rem !important;
}
</style>
