<script lang='ts' setup>
const { y} = inject('scroll', {
  y: ref<number>(0)
})

const scrollProgress = computed(() => y.value / 200)

const user = useSupabaseUser()
const supabaseAuthClient = useSupabaseAuthClient()
const supabaseClient = useSupabaseClient()

const onPWA = computed(() => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(display-mode: standalone)').matches
})
</script>

<template>
  <header class='w-full min-h-14 items-center flex flex-nowrap sticky top-0 z-30 justify-between gap-4 p-4  '>
    <NuxtLink to="/" class="flex">
      <Icon class="w-10 h-10 text-on-surface" name="ph:soundcloud-logo"/>
    </NuxtLink>
    <div class="flex flex-nowrap gap-4">

      <button
          v-if="user"
        @click="supabaseAuthClient.auth.signOut()"
          class="px-3 py-2 border border-on-surface text-on-surface font-semibold rounded-md">
        <span>Sign out</span>
      </button>
      <button
        v-if="!user"
        class="px-3 py-2 border border-on-surface text-on-surface font-semibold rounded-md">
      <span>Sign in</span>
    </button>
      <button v-if="!onPWA"
          class="px-3 py-2 bg-on-surface text-surface font-semibold rounded-md">
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