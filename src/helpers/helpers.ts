import { useQuasar } from "quasar";
import { computed } from "vue";

const helpers = () => {
  const $q = useQuasar();

  const isMobileScreen = computed(() => $q.screen.lt.md);
  const showToast = ({ message }: { message: string }) => {
    $q.notify({
      message,
      color: "green",
    });
  };

  return {
    isMobileScreen,
    showToast,
  };
};

export default helpers;
