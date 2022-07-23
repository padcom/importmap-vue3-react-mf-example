<template>
  <div class="app">
    <h1>Vue.js: Hello, {{ name }}! (library3)</h1>
    <button @click="testme()">Click me!!!</button>
    <img src="./assets/vue.svg">
  </div>
</template>

<script>
import { onMounted } from 'vue'

export default {
  props: {
    name: { type: String, default: 'John' }
  },
  setup() {
    onMounted(() => { console.log('[LIBRARY3] App.vue mounted') })
  },
  mounted() {
    console.log('[LIBRARY3] App.mounted()')
  },
  methods: {
    testme() {
      console.log('[LIBRARY3] App.methods.testme()')
    }
  }
}
</script>

<style scoped>
.app {
  background-color: azure;
}

h1 {
  color: brown;
}
</style>
