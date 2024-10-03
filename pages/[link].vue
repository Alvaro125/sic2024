<template>
  <div>
    ...redirecionando para
    {{ redirect }}
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const redirect = ref<string>('vazio')
onMounted(async ()=>{
  const data:any = await $fetch(`/api/link`,{
    method: "GET",
    query:{
      link :route.params.link
    }
  })
  redirect.value = data.redirect
  await navigateTo( data.redirect as string,{external:true})
})
</script>