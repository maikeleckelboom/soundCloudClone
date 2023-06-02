<script lang='ts' setup>
import GithubLoginButton from '~/components/GithubLoginButton.vue'
import { APP_AUDIO_INJECTION_KEY } from '~/context'

const { data: tracks, error } = await useSupabaseClient()
  .from('tracks')
  .select('*')
  .order('id', { ascending: true })


const user = useSupabaseUser()
</script>

<template>
  <div v-if='user'>
    <h1>You are logged in.</h1>
  </div>
  <div v-else>
    <GithubLoginButton />
  </div>
</template>