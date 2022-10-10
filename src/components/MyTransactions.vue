<script setup lang="ts">
import TransactionItem from "@/components/TransactionItem.vue";
import { ref } from "vue";
import ExpansionCard from "@/components/common/ExpansionCard.vue";

const recentTransactions = ref([
  {
    id: 1,
    name: "Transaction 1",
    date: "20 May 2020",
    desc: "Refund on debit card",
    type: "cr",
    currency: "S$",
    amount: "100",
    categoryColor: "#009DFF1A",
    categoryImage: "file-storage",
  },
  {
    id: 2,
    name: "Transaction 2",
    date: "20 May 2020",
    desc: "Refund on debit card",
    type: "cr",
    currency: "S$",
    amount: "100",
    categoryColor: "#00D6B51A",
    categoryImage: "flights",
  },
  {
    id: 3,
    name: "Transaction 3",
    date: "20 May 2020",
    desc: "Charged to debit card",
    type: "dr",
    currency: "S$",
    amount: "100",
    categoryColor: "#F251951A",
    categoryImage: "megaphone",
  },
  {
    id: 4,
    name: "Transaction 1",
    date: "20 May 2020",
    desc: "Refund on debit card",
    type: "cr",
    currency: "S$",
    amount: "100",
    categoryColor: "#009DFF1A",
    categoryImage: "file-storage",
  },
]);
</script>

<template>
  <ExpansionCard label="Recent Transactions" card-icon="arrows-group">
    <q-card class="column rounded-borders">
      <TransactionItem
        v-for="transaction in recentTransactions"
        :key="transaction.id"
        :transaction-name="transaction.name"
        :transaction-date="transaction.date"
        :transaction-desc="transaction.desc"
        :transaction-type="transaction.type"
        :currency="transaction.currency"
        :amount="transaction.amount"
        :category-color="transaction.categoryColor"
        :category-image="transaction.categoryImage"
      />
    </q-card>
    <q-card
      class="column my-transactions__all-transactions-btn text-weight-medium flex-center cursor-pointer q-pa-md"
    >
      View all card transactions
    </q-card>
  </ExpansionCard>
</template>

<style scoped lang="scss">
@import "@/styles/quasar.variables.scss";

.my-transactions__all-transactions-btn {
  background-color: $all-action-btn-bg;
  color: $all-action-btn-text;
  font-size: 0.8125rem;
}
</style>
