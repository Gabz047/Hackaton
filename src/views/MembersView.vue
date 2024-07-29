<script setup>
import MembersCard from '@/components/MembersCard.vue';
import { members} from '@/utils/membersInfo';

</script>

<template>
    <main class="main-members">
    <MembersCard v-for="(item, index) in members" :key="index" :image="item.image" :name="item.name" :info_project="item.amountPr" :languages="item.languages" />
    </main>
</template>