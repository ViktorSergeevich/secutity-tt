<script setup lang="ts">
defineProps<{
  src: string,
}>()
const imagePaths = [
  './src/assets/profile1.png',
  './src/assets/profile2.png'
]
function getRandomSrc() {

  const randIdx = Math.floor(Math.random() * 2)

  return imagePaths[randIdx]
}

getRandomSrc()
</script>

<template>
  <img class="avatar" :src="src ? src : getRandomSrc()"/>
</template>

<style lang="scss" scoped>
.avatar {
  border-radius: 50px;
  width: 100px;
  height: 100px;
}
</style>
