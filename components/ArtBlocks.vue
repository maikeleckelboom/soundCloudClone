<script lang='ts' setup>
const { data: tracks, error } = await useSupabaseClient()
  .from('tracks')
  .select('*')
  .order('id', { ascending: true })
</script>

<template>
  <div>
    <AuthStatus />
    <div v-for='track in tracks' :key='track.id'>
      <SoundTrack
        :name='track.name'
        :src='track.url'
      />
    </div>
  </div>
</template>