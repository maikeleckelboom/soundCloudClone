import { useNuxtApp } from "#app";

export const useCustomColors = () => {
  const { $customColors } = useNuxtApp();
  return $customColors;
};
