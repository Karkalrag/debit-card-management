<script lang="ts">
import { ref } from "vue";

export default {
  emits: ["new-card-added"],
  setup(_, context) {
    const firstName = ref(null);
    const lastName = ref(null);
    const validate = (value: string) => {
      return value && value.length > 0 && /^[a-zA-Z]+$/.test(value);
    };

    const onSubmit = () => {
      context.emit("new-card-added", {
        firstName: firstName.value,
        lastName: lastName.value,
      });
    };

    const onReset = () => {
      firstName.value = null;
      lastName.value = null;
    };

    return {
      firstName,
      lastName,
      validate,
      onSubmit,
      onReset,
    };
  },
};
</script>

<template>
  <div class="q-pa-md add-new-card-dialog">
    <div class="text-h6 q-mb-lg">Add new card</div>
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        filled
        v-model="firstName"
        label="First Name *"
        lazy-rules
        :rules="[(val) => validate(val) || 'Please enter a valid First Name']"
      />

      <q-input
        filled
        v-model="lastName"
        label="Last Name *"
        lazy-rules
        :rules="[(val) => validate(val) || 'Please enter a valid Last Name']"
      />

      <div class="q-mt-lg">
        <q-btn no-caps label="Add" type="submit" color="primary" />
        <q-btn
          no-caps
          label="Close"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
          v-close-popup
        />
      </div>
    </q-form>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/quasar.variables.scss";
.add-new-card-dialog {
  background-color: $white;
}
</style>
