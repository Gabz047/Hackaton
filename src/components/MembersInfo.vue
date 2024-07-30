<script setup>
const props = defineProps({
    name: String,
    image: String,
    about: String,
    languages: Array,
    prjs: Array,
})
</script>

<template>
    <main class='detail-Container'>
        <div class='detail-header'>
            <h1 class='detail-tittle'>{{ props.name }}</h1>
        </div>
        <div class='detail-content'>
            <div class='detail-article'>
                <div class="detail-text">
                    {{ props.about }}
                </div>
                <div class="detail-languages">
                    <div class="detail-boxes" v-for="(langs,index) in props.languages" :key="index"> <mdicon class="vicon" :name="langs" :height="40" :width="40" fill="black" /></div>
                </div>
            </div>
            <div class='detail-article'>
                <div class="detail-box-img">
                    <img :src="props.image" alt="">
                </div>
                <div class="detail-prj">
                    <h3 class="prjs-tittle">Projetos:</h3>
                    <ul>
                        <li v-for="(prj, index) in props.prjs" :key="index">{{ prj }}</li>
                    </ul>
                </div>
            </div>
        </div>
</main>
</template>