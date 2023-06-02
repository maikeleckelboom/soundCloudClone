import {
  argbFromHex,
  hexFromArgb,
  TonalPalette
} from '@material/material-color-utilities'
import { HctColor, KeyColors } from '~/modules/theme/types/theme'

export type Bounds = {
  min: number;
  max: number;
};

export type HctBounds = {
  [key in keyof HctColor]: Bounds;
};

const bounds: HctBounds = {
  hue: { min: 0, max: 360 },
  chroma: { min: 0, max: 150 },
  tone: { min: 0, max: 100 }
} as const


export function useCorePaletteColor(key: keyof KeyColors) {
  const keyColors = useKeyColors()

  const hex = computed({
    get: () => keyColors.value[key],
    set: (v: string) => (keyColors.value[key] = v)
  })

  const palette = TonalPalette.fromInt(argbFromHex(hex.value))

  const model = reactive<HctColor>({
    hue: palette.hue,
    chroma: palette.chroma,
    tone: 50
  })

  watch(model, (m) => {
    keyColors.value[key] = hexFromArgb(
      TonalPalette.fromHueAndChroma(m.hue, m.chroma).tone(m.tone)
    )
  })

  const triggerUpdate = () => {
    const palette = TonalPalette.fromInt(argbFromHex(hex.value))
    model.hue = palette.hue
    model.chroma = palette.chroma
  }

  const { hue, chroma, tone } = toRefs(model)

  return {
    bounds,
    hue,
    chroma,
    tone,
    hex,
    triggerUpdate
  }
}
