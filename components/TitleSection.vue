<script setup lang='ts'>
interface Props {
  title?: string
  subtitle?: string
}

const { title, subtitle } = defineProps<Props>()

</script>

<template>
  <div class='mb-2'>
    <slot>
      <h2 class='text-headline-medium md:text-display-small leading-tight font-semibold mb-2'>
        <slot name='title' v-bind='{title}'>
          {{ title && title }}
        </slot>
      </h2>
      <p class='text-body-large text-on-surface-variant leading-loose mb-4'>
        <slot name='subtitle' v-bind='{subtitle}'>
          {{ subtitle && subtitle }}
        </slot>
      </p>
    </slot>
  </div>
</template>