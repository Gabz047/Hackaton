<script setup>
const props = defineProps({
    tittle: {
        type: String
    }
})
</script>
<template>
    <aside class="container-secIdentifier">
        <p class="text-secIdentifier"> {{ props.tittle }}   </p>
    </aside>
</template>