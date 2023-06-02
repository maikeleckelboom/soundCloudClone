<script lang='ts' setup>
import SoundTrack from '~/components/SoundTrack.vue'
const { data: tracks, pending, error } = await useSupabaseClient()
    .from('tracks')
    .select('*')
    .order('id', { ascending: true })

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
        v-for='sound in tracks' :key='sound'
        :name='sound.name'
        :src='sound.url'
      />
    </div>
  </div>
</template>