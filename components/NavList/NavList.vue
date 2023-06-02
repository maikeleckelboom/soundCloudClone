<script setup lang='ts'>
import { NavItem } from '~/types'

const { items } = defineProps<{
  items: NavItem[]
}>()
</script>

<template>
  <nav class='relative'>
    <ul>
      <NavListItem
        v-for='child in items'
        :key='child.name'
        :item='child'
      />
    </ul>
  </nav>
</template>

