<script lang="ts" setup>
const {
  public: {
    theme: { options },
  },
} = useRuntimeConfig();
const colorMode = reactive(useColorMode());

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
};

const isDark = computed(() => colorMode.value === "dark" || process.server &&  options.dark);
</script>

<template>
  <button
    class="grid w-fit cursor-pointer grid-flow-col gap-2 rounded-2xl px-4 py-2 place-center text-primary bg-surface-level-1 border-thin border-surface-level-1 hover:bg-surface-level-2 active:bg-surface-level-3"
    v-on:click="toggleColorMode"
  >
    <Icon :name="isDark ? 'ci:sun' : 'ci:moon'" class="h-5 w-5" />
  </button>
</template>
