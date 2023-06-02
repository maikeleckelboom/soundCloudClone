<script lang='ts' setup>
const user = useSupabaseUser()
const router = useRouter()

// watch(user, () => {
//   if (!user.value) return
//   router.push('/discover')
// })
</script>

<template>
  <div class="h-full">
    <div v-if='user' class="flex h-full p-4 mt-8 justify-center">
      <div class="flex flex-nowrap gap-3 bg-surface-level-2 h-fit p-4 rounded-2xl">
        You are logged in.
        <Icon class="w-6 h-6 " name="ic:round-check"/>
      </div>
    </div>
    <div v-else>
      <GithubLoginButton/>
    </div>
  </div>
</template>