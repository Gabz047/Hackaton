<template>
      <div class="card">
        <img :src="photo" />
        <p style="text-align: center">{{ description }}</p>
      </div>
</template>
<script setup>
defineProps({
  id: {
    type: Number
  },
  photo: {
    type: String
  },
  description: {
    type: String
  }
})
</script>
