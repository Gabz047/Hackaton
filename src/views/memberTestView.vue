<script setup>
import MembersInfo from '../components/MembersInfo.vue'
import { membersDetails } from '../utils/membersInfo'

</script>

<template>
  <MembersInfo
  v-for=" item in membersDetails" :key="item.name"
    :name="item.name"
    :about="item.about"
    :image="item.image"
    :languages="item.languages"
    :prjs="item.prjs"
  />
</template>

<style></style>
