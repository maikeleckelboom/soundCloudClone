<script lang='ts' setup>
import { Sound } from '~/server/api/sounds'
import SoundTrack from '~/components/SoundTrack.vue'

const { data: sounds, pending, error } = await useAsyncData('sounds', () => $fetch(`/api/sounds`),
  { transform: (data: { body: Sound[] }) => data.body.map(s => {
    return {
      name: s.name,
      url: `${s.url.replace('public', '')}`
    }
  }) }
)
</script>

<template>
  <div class=' max-w-full  '>
    <div v-if='pending'>
      Pending
    </div>
    <div v-else-if='error'>
      Error
    </div>
    <div v-else>
      <SoundTrack
        v-for='sound in sounds' :key='sound'
        :name='sound.name'
        :src='sound.url'
      />
    </div>
  </div>
</template>