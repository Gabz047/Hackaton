<template>
<div class="obj">
  <div class="title">
    <p v-if="id === 1">Comprotidos com o hackatas</p>
    <p v-if="id === 2">Objetivos para o hackaton</p>
  </div>
  <div class="photo">
    <img :src="photo" />
  </div>
</div>
</template>
<script setup>
defineProps({
  id: {
    type: Number
  },
  photo: {
    type: String
  }
})
</script>
