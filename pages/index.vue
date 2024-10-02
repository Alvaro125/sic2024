<template>
  <div id="test">
    <h1>{{grandetexto}}</h1>
    <input type="text" name="" id="" v-model="text">

    <input type="number" v-model="n1">
    <input type="number" v-model="n2">
    <Botao :text="text" v-model="data"><small>aqui</small></Botao>
    {{ data }}
  </div>
</template>

<script setup lang="ts">
const text = ref<string>("Hello World 1")
const data = ref()
const grandetexto = computed(()=>{
  return text.value.toUpperCase()
})

const n1 = ref<number>(0)
const n2 = ref<number>(0)

watch([n1,n2],(now,before)=>{
  if(n1.value+n2.value>50){
    text.value = "A balaça não aguenta, reduza o peso"
  }else{
    text.value = "ok"
  }
})
</script>

<style>
#test{
  display: flex;
  flex-direction: column;
}
</style>