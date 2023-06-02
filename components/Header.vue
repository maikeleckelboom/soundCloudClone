<script lang='ts' setup>
const {x, y} = inject('scroll', {
  x: ref<number>(0),
  y: ref<number>(0)
})

const scrollProgress = computed(() => y.value / 200)
</script>

<template>
  <header class='w-full min-h-14 items-center flex flex-nowrap sticky top-0 z-30 justify-between gap-4 p-4  '>
    <button class="">
      <Icon class="w-10 h-10 text-on-surface" name="ph:soundcloud-logo"/>
    </button>
    <div class="flex flex-nowrap gap-4">
      <button class="px-3 py-2 border border-on-surface text-on-surface font-semibold rounded-md">
        <span>Sign in</span>
      </button>
      <button class="px-3 py-2 bg-on-surface text-surface font-semibold rounded-md">
        <span>Listen in app</span>
      </button>
    </div>
  </header>
</template>

<style lang="postcss" module scoped>
header {
  --scroll-progress: v-bind('scrollProgress');
  background-color: rgba(var(--md-sys-color-surface-container-rgb) / var(--scroll-progress));
}
</style>