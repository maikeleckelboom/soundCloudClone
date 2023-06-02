import { Ref } from "vue";
import { TonalPalette } from "@material/material-color-utilities";
import { capitalize } from "@vue/runtime-core";

export const camelize = (str: string) =>
  str
    .split(/-|\s/)
    .map((word, index) => (index === 0 ? word : capitalize(word)))
    .join("")
    .replace(/^[A-Z]/, (str) => str.toLowerCase());

export const usePalettes = (
  filter: ("system" | "custom")[] = []
): Ref<Record<string, TonalPalette>> => {
  const { $theme } = useNuxtApp(),
    {
      public: {
        theme: { options },
      },
    } = useRuntimeConfig();
  return computed(() => ({
    ...(filter.includes("system") ? {} : $theme.value.palettes),
    ...(filter.includes("custom")
      ? {}
      : $theme.value.customColors.reduce((acc, customColor) => {
          acc[camelize(customColor.color.name)] = paletteFromCustomColor(
            customColor,
            $theme.value.source,
            options.tones
          );
          return acc;
        }, {} as Record<string, TonalPalette>)),
  }));
};
