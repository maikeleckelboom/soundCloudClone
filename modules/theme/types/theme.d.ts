import { CustomColor, Scheme, Theme } from '@material/material-color-utilities'
import { Ref } from 'vue'

export interface HctColor {
  hue: number;
  chroma: number;
  tone: number;
}

export interface CorePaletteColors {
  primary: HctColor;
  secondary: HctColor;
  tertiary: HctColor;
  error: HctColor;
  neutral: HctColor;
  neutralVariant: HctColor;
}

type Infer<T> = T extends { toJSON(): infer U } ? U : never;

export type SchemeJSON = Infer<typeof Scheme>;

export type CustomHexColor = Omit<CustomColor, 'value'> & { value: string };

interface ThemeModuleOptions {
  options?: {
    dark?: boolean;
    tones?: number[];
  };
  colors?: {
    primary: string;
    secondary?: string;
    tertiary?: string;
    neutral?: string;
    neutralVariant?: string;
    error?: string;
  };
  customColors?: {
    name: string;
    value: string;
    blend: boolean;
  }[];
}

export type KeyColors = {
  primary: string;
  secondary: string;
  tertiary: string;
  neutral: string;
  neutralVariant: string;
  error: string;
};

declare module '@nuxt/schema' {
  interface AppConfigInput {
    theme: ThemeModuleOptions;
  }

  interface RuntimeConfig {
    theme: ThemeModuleOptions;
  }
}

declare module '#app' {
  interface NuxtApp {
    $theme: Ref<Theme>;
    $keyColors: Ref<KeyColors>;
    $customColors: Ref<CustomHexColor[]>;
    $prefersDark: Ref<boolean>;
    $sourceColor: Ref<string>;
  }
}