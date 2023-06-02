import { useNuxtApp } from "#app";

export const useKeyColors = () => {
  const { $keyColors } = useNuxtApp();
  return $keyColors;
};
