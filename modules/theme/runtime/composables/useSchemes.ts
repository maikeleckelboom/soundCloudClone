import { Scheme } from "@material/material-color-utilities";
import { ComputedRef } from "vue";

export const useSchemes = (): ComputedRef<{ light: Scheme; dark: Scheme }> => {
  const { $theme } = useNuxtApp();
  return computed(() => $theme.value.schemes);
};
