import { argbFromHex } from "@material/material-color-utilities";

export const allArgbFromHex = (keyColors: Record<string, string>) => {
  return Object.entries(keyColors).reduce((acc, [key, value]) => {
    acc[key] = argbFromHex(value);
    return acc;
  }, {} as Record<string, number>);
};
