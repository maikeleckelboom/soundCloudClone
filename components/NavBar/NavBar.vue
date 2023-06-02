<script lang='ts' setup>
const items = ref([
  {
    name: 'Discover',
    icon: 'ic:outline-home',
    link: '/discover'
  },
  {
    name: 'Trending',
    icon: 'ic:outline-whatshot',
    link: '/trending'
  },
  {
    name: 'Search',
    icon: 'ic:outline-search',
    link: '/search'
  },
  {
    name: 'Library',
    icon: 'ic:outline-library-music',
    link: '/library'
  }
])

const route = useRoute()

const activeItem = computed(() => {
  return items.value.find(item => item.link === route.path)
})

</script>

<template>
    <ul class="grid grid-cols-4 h-fit min-h-[56px] sticky inset-x-0 bottom-0 bg-surface z-30">
      <li v-for='item in items' :key='item.name' class="relative">
        <NuxtLink :to='item.link'
                  :class="activeItem === item ? 'bg-primary/20' : ''"
                  class="h-14 grid place-content-center hover:bg-primary/20  focus-visible:bg-primary/30">
          <Icon :name="item.icon" class="w-8 h-8"/>
          <span class="hidden">{{ item.name }}</span>
        </NuxtLink>
      </li>
    </ul>
</template>

<style>
</style>