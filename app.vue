<script lang='ts' setup>
const theme = useTheme()

useHead({
  title: 'SoundCloud',
  meta: [
    {
      name: 'description',
      content: 'Stream and listen to music online for free with SoundCloud. Find new music and explore artists.'
    }
  ]
})
</script>

<template>
  <NuxtLoadingIndicator :color='useColorGradient()'/>
  <NuxtPage/>
  <VitePwaManifest/>
</template>

<style>
</style>