import {
  argbFromHex,
  Blend,
  ColorGroup,
  CustomColor,
  CustomColorGroup,
  TonalPalette,
} from "@material/material-color-utilities";
import { camelize } from "@vue/runtime-core";
import { CustomHexColor } from '~/modules/theme/types/theme'

export const schemeFromCustomColor = (
  customColor: CustomColor,
  colorGroup: ColorGroup
) => {
  const properties: Record<string, number> = {};
  for (const [key, value] of Object.entries(colorGroup)) {
    const name = customColor.name.replace(/^\W+|\W+$|\s/g, "-").toLowerCase();
    const map = key.replace(/([a-z])(?=[A-Z])/g, "$1-").toLowerCase();
    const token = camelize(map.replace(/color/, name));
    properties[token] = value;
  }
  return properties;
};

export const paletteFromCustomColor = (
  customColor: CustomColorGroup,
  source: number,
  tones: number[]
) => {
  let tonalPalette = TonalPalette.fromInt(customColor.color.value);
  if (customColor.color.blend) {
    const harmonized = Blend.harmonize(customColor.color.value, source);
    tonalPalette = TonalPalette.fromInt(harmonized);
  }
  tones.forEach((tone) => tonalPalette.tone(tone));
  return tonalPalette;
};

export const argbCustomColors = (customColors: CustomHexColor[]) =>
  customColors.map((customColor) => ({
    name: customColor.name,
    value: argbFromHex(customColor.value),
    blend: customColor.blend,
  }));
