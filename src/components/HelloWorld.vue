<script setup lang="ts">
import { ref } from 'vue';
import svgIcon from './custom/svg-icon.vue';

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
  <icon-mdi-emoticon class="text-24px text-red" />
  <icon-mdi:emoticon style="font-size: 24px; color: #f00" />
  <icon-local-no-icon class="text-24px text-red" />
  <svg-icon icon="mdi-emoticon" />
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
