import {
  Blend,
  CorePalette,
  customColor,
  CustomColor,
  Scheme,
  Theme,
  TonalPalette,
} from "@material/material-color-utilities";
import { allArgbFromHex } from "../utils/allArgbFromHex";
import { KeyColors } from '~/modules/theme/types/theme'

export function themeFromKeyColors(
  keyColors: KeyColors,
  customColors: CustomColor[]
): Theme {
  const colors = allArgbFromHex(keyColors);
  const palette = CorePalette.of(colors.primary);
  palette.a2 = TonalPalette.fromInt(colors.secondary);
  palette.a3 = TonalPalette.fromInt(colors.tertiary);
  palette.n1 = TonalPalette.fromInt(colors.neutral);
  palette.n2 = !!colors.neutralVariant
    ? TonalPalette.fromInt(colors.neutralVariant)
    : TonalPalette.fromInt(Blend.harmonize(colors.neutral, colors.primary));
  palette.error = TonalPalette.fromInt(colors.error);
  return {
    source: colors.primary,
    schemes: {
      light: Scheme.lightFromCorePalette(palette),
      dark: Scheme.darkFromCorePalette(palette),
    },
    palettes: {
      primary: palette.a1,
      secondary: palette.a2,
      tertiary: palette.a3,
      neutral: palette.n1,
      neutralVariant: palette.n2,
      error: palette.error,
    },
    customColors: customColors.map((c) => customColor(colors.primary, c)),
  };
}