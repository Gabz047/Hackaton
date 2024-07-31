<script setup>
import InfoCompVue from '@/components/homecomps/InfoComp.vue'
import ObjComp from '@/components/homecomps/ObjComp.vue'
import { infoshome } from '@/utils/info.js'
import { photosobj } from '@/utils/target'
</script>
<template>
  <div class="home-container">
    <div class="obj-container">
      <ObjComp v-for="obj in photosobj" :key="obj.id" :id="obj.id" :photo="obj.photo" />
    </div>
    <div class="card-container">
      <InfoCompVue
        v-for="info in infoshome"
        :key="info.id"
        :photo="info.photo"
        :description="info.description"
        :id="info.id"
      />
    </div>
  </div>
  
</template>
