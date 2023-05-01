<template>
  <div>
    <v-btn @click="toggleTheme" variant="text">
      <IconMoon v-if="theme.global.name.value === 'light'"/>
      <IconSun v-else/>
    </v-btn>
  </div>
</template>

<script setup>
const { toggleTheme, theme } = useToggleTheme()
</script>

<style scoped>

</style>