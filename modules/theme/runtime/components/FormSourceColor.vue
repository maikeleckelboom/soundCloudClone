<script lang="ts" setup>
const sourceColor = useSourceColor();
</script>

<template>
  <div>
    <form>
      <div class="form-group">
        <label for="sourceColor">Source Color</label>
        <input id="sourceColor" v-model="sourceColor" type="color" />
      </div>
    </form>
  </div>
</template>
