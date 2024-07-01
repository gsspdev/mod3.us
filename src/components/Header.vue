<script setup>
import { ref, onMounted } from 'vue';

const status = ref('text-gruvbox-gray');
const spotify = ref(null);

</script>

<template>
  <div class="font-sans font-black text-5xl">
    babaoglu<span :class="['text-2xl', status]">.dev</span>
  </div>
  <div class="flex gap-2 text-sm text-gruvbox-gray">
    <font-awesome-icon :icon="['fab', 'spotify']" class="mt-[3px]" />
  </div>
  <div class="flex gap-10 mt-5 text-xl">
    <a href="https://github.com/gsspdev/" target="_blank"><font-awesome-icon :icon="['fab', 'github']" /></a>
    <a href="https://www.linkedin.com/in/gssp/" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin']" /></a>
  </div>
</template>
