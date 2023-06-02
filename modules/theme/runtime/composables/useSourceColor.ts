import { Ref } from "vue";

export const useSourceColor = (): Ref<string> => {
  const { $sourceColor } = useNuxtApp();
  return $sourceColor as Ref<string>;
};
