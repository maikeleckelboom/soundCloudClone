<script lang="ts" setup>
import {Ref} from "vue";
import {useScroll} from "#imports";

const layoutElement = useCurrentElement() as Ref<HTMLElement>

provide('scroll', useScroll(layoutElement))
</script>

<template>
  <div
      class="mx-auto max-w-md rounded-md border-0 border-outline-variant  w-full bg-surface-container h-full md:h-[80vh] flex flex-col relative overflow-x-hidden overflow-y-scroll scrollbar">
    <Header/>
    <slot></slot>
  </div>
</template>