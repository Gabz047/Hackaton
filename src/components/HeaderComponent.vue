<script setup>
import { ref } from 'vue'

const boxNavigationsInfo = ref([
  { icon: 'home', link: '', name: 'Home' },
  { icon: 'account-group', link: '', name: 'Members' },
  { icon: 'note-text-outline', link: '', name: 'Projects' }
])
</script>

<template>
  <header>
    <div class="container-header">
      <nav class="navigation-header">
        <span class="box-span" v-for="item in boxNavigationsInfo">
          <div class="icon-span">
            <mdicon class="vicon" :name="item.icon" :height="20" :width="20" fill="black" />
          </div>
          <div class="text-span">
            <router-link class="text-span-content"><p>
                {{ item.name }}
            </p></router-link>
          </div>
        </span>
      </nav>
    </div>
  </header>
</template>
