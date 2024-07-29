<script setup>
import { boxNavigationsInfo } from '@/utils/headerInformation';
</script>

<template>
  <header>
    <div class="container-header">
      <nav class="navigation-header">
        <span class="box-span" v-for="(item, index) in boxNavigationsInfo" :key="index">
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
