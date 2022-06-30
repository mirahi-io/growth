<script setup>
import { ref, unref, watchEffect } from 'vue'

const data = await useAsyncData('home', () => queryContent('documents').only(['title', '_path']).find())
const regularData = unref(data.data)
const items = regularData.map(i => i.title)

const title = ref('')

const documentLink = ref('')

watchEffect(() => {
  if (title.value) {
    documentLink.value = regularData.find(({ title: t }) => t === title.value)?._path
  }
})
</script>

<template>
  <div>
    <v-autocomplete
      v-model="title"
      :items="items"
    />
    <h1 v-if="title">
      <a :href="documentLink">{{ title }}</a>
    </h1>

    <h1 v-for="item in regularData" v-else :key="item.title">
      <a :href="item._path">{{ item.title }}</a>
    </h1>
  </div>
</template>
