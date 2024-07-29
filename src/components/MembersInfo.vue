<script setup>
const props = defineProps({
    name: String,
    image: String,
    about: String,
})
</script>

<template>
    <main class='detail-Container'>
        <div class='detail-header'>
            <h1 class='detail-tittle'>{{ props.name }}</h1>
        </div>
        <div class='detail-content'>
            <div class='detail-article'>
                {{ props.about }}
            </div>
            <div class='detail-article'>
                <div class="box-img">
                <img :src="props.image" alt="">
            </div>
            </div>
</main>
</template>