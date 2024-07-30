<script setup>
import MembersCard from '@/components/MembersCard.vue';
import { members} from '@/utils/membersInfo';
import MembersInfo from '@/components/MembersInfo.vue';
import { ref } from 'vue';
const showCard = ref(false)
</script>

<template>
    <main class="main-members" >
    <div class="container-mbm" >
    <MembersCard v-for="(item, index) in members" :key="index" :image="item.image" :name="item.name" :info_project="item.amountPr" :languages="item.languages" @open="showCard = !showCard" />
    </div>
    <MembersInfo :classes="{open: showCard}" />
    </main>
   
</template>