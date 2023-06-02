export const useColorGradient = () => {
  const { primary, secondary, tertiary } = {
    primary: "var(--md-sys-color-primary)",
    secondary: "var(--md-sys-color-secondary)",
    tertiary: "var(--md-sys-color-tertiary)",
  };
  return `repeating-linear-gradient(to right,${primary} 0%,${secondary} 50%,${tertiary} 100%)`;
};
