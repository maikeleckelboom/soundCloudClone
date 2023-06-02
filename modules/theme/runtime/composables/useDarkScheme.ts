import { SchemeJSON } from "~";
import { Ref } from "vue";

export const useDarkScheme = (): Ref<SchemeJSON> => {
  const { $theme } = useNuxtApp();
  return computed(() => $theme.value.schemes.dark.toJSON());
};
