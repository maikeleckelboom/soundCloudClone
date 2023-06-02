import { hexFromArgb, TonalPalette } from "@material/material-color-utilities";

export const tonesFromPalette = (palette: TonalPalette, tones: number[]) => {
  const paletteTones: Record<string, string> = {};
  for (const tone of tones) {
    const tonalPalette = TonalPalette.fromHueAndChroma(
      palette.hue,
      palette.chroma
    );
    const color = tonalPalette.tone(tone);
    paletteTones[tone] = hexFromArgb(color);
  }
  return paletteTones;
};
