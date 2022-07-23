<template>
  <div class="app">
    <h1>Vue.js: Hello, {{ name }}! (library7)</h1>
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
    onMounted(() => { console.log('[LIBRARY7] App.vue mounted') })
  },
  mounted() {
    console.log('[LIBRARY7] App.mounted()')
  },
  methods: {
    testme() {
      console.log('[LIBRARY7] App.methods.testme()')
    }
  }
}
</script>

<style scoped>
.app {
  background-color: sandybrown;
}

h1 {
  color: aliceblue;
}
</style>
