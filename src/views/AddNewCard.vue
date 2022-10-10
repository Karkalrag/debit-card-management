<template>
  <div class="q-pa-md" style="max-width: 400px">
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

      <div>
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>

<script lang="ts">
import { useQuasar } from "quasar";
import { ref } from "vue";

export default {
  setup() {
    const $q = useQuasar();
    const firstName = ref(null);
    const lastName = ref(null);
    const validate = (value: string) => {
      return value && value.length > 0 && /^[a-zA-Z]+$/.test(value);
    };
    return {
      firstName,
      lastName,
      validate,

      onSubmit() {
        $q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Submitted",
        });
      },

      onReset() {
        firstName.value = null;
        lastName.value = null;
      },
    };
  },
};
</script>
