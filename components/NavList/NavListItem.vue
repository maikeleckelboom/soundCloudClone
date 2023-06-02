<script setup lang='ts'>
import { NavItem } from '~/types'

const { item } = defineProps<{
  item: NavItem
}>()
</script>

<template>
  <NavListItem v-if='item.children' v-for='child in item.children' :key='child.name' :item='child' />
  <li v-else class='flex flex-nowrap items-center gap-2.5 w-fit'>
    <NuxtLink :to='item.href' data-target='true' class='tracking-tight grid grid-cols-[40px,1fr] p-2.5 rounded-md'>
      <Icon v-if='item.icon' :name='item.icon' class='w-6 h-6' />
      {{ item.value }}
    </NuxtLink>
  </li>
</template>

<style lang='postcss' scoped>
li {
  transition: all cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
}

nav:has(li:hover):hover ul > * {
  opacity: 0.4;
  transform: scale(0.96);
}

nav:has(li:hover) ul > *:hover {
  opacity: 1;
  transform: scale(1);
  transition-delay: 0ms, 0ms;
}
</style>
