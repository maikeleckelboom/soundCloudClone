<script lang='ts' setup>
import GithubLoginButton from '~/components/GithubLoginButton.vue'
// go to /discover if user is logged in

const user = useSupabaseUser()
const router = useRouter()
watch(() => user.value, (user) => {
  if (user) {
    router.push('/discover')
  }
})
</script>

<template>
 <div class="h-full">
   <div v-if='user' class="flex h-full">
     <h1>You are logged in.</h1>
   </div>
   <div v-else>
     <GithubLoginButton />
   </div>
 </div>
</template>