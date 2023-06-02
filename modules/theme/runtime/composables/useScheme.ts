import { SchemeJSON } from "~";
import { Ref } from "vue";

export const useScheme = (): Ref<SchemeJSON> => {
  const { $theme, $prefersDark } = useNuxtApp();
  return computed(() => {
    return $prefersDark.value
      ? $theme.value.schemes.dark.toJSON()
      : $theme.value.schemes.light.toJSON();
  });
};
