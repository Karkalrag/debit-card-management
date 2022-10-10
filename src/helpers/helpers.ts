import { useQuasar } from "quasar";
import { computed } from "vue";

const helpers = () => {
  const $q = useQuasar();

  const isMobileScreen = computed(() => $q.screen.lt.md);

  return {
    isMobileScreen,
  };
};

export default helpers;
