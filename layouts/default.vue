<script lang="ts" setup>
import {Ref} from "vue";
import {useScroll} from "#imports";

const layoutElement = useCurrentElement() as Ref<HTMLElement>

const {x,y, arrivedState, isScrolling, measure, directions} = useScroll(layoutElement, {
  onScroll: (e) => {
    console.log(e)
  }
})

provide('scroll', {
  x,
  y,
  arrivedState,
  isScrolling,
  measure,
  directions
})
</script>

<template>
  <div
      class="mx-auto max-w-md rounded-md border-0 border-outline-variant  w-full bg-surface-container h-full md:h-[80vh] flex flex-col relative overflow-x-hidden overflow-y-scroll scrollbar">
    <Header/>
    <slot></slot>
  </div>
</template>