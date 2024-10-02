<template>
    <button @click="click" ><h1>{{ props.text }}</h1>
    <slot/> </button>
</template>
<script setup lang="ts">
const model = defineModel()
const props = defineProps<{
    text: string
}>()

const {data:photos, execute, error, refresh, status} = await useFetch('https://jsonplaceholder.typicode.com/photos',{
        method: 'GET'
    })
async function click(event: EventTarget){
    // const data = await $fetch('https://jsonplaceholder.typicode.com/photos',{
    //     method: 'GET'
    // })
    // model.value = data
    console.log(photos)
}
</script>