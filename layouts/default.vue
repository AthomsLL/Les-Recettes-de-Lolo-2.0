<template>
  <div>
    <TheHeader />

    <div class="container">
      <slot />
    </div>

    <TheFooter />
  </div>
</template>

<script setup>
import TheHeader from '../components/layout/TheHeader.vue';
import TheFooter from '../components/layout/TheFooter.vue';

</script>

<style scoped>

</style>