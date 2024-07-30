<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
const route = new useRoute()

const showSection = computed(() => route.name)
</script>

<template>
 
  <HeaderComponent />
  <router-view/>
  <FooterComponent/>
</template>