<template>
  <div class="flex flex-col items-center">
    <input type="text" v-model="url" class="border-1 border-black bg-gray-400">
    <button @click="create">Criar</button>
    <div>{{ resposta }}</div>
    <ul>
      <li v-for="link in data">
        /{{ link.content }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const url = ref<string>("")
const resposta = ref<any>()
const {data, execute} = await useFetch('/api/link',{
  method:'get'
})
await execute()

async function create() {
  const data = await $fetch('/api/link', {
    method: 'POST',
    body: {
      link: url.value
    }
  })
  resposta.value = data
}
</script>

<style>
#test {
  display: flex;
  flex-direction: column;
}
</style>