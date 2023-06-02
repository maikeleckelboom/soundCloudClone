import { Theme } from "@material/material-color-utilities";
import { Ref } from "vue";

export const useTheme = (): Ref<Theme> => {
  const { $theme } = useNuxtApp();
  return $theme;
};
