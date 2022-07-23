<template>
  <div class="app">
    <h1>Vue.js: Hello, {{ name }}! (library5)</h1>
    <button @click="testme()">Click me!!!</button>
    <img src="./assets/vue.svg">
  </div>
</template>

<script>
import { events } from '@padcom/mf-test-common'
import { onMounted } from 'vue'

export default {
  props: {
    name: { type: String, default: 'John' }
  },
  setup() {
    onMounted(() => { console.log('[LIBRARY5] App.vue mounted') })
  },
  mounted() {
    console.log('[LIBRARY5] App.mounted()')
  },
  methods: {
    testme() {
      console.log('[LIBRARY5] App.methods.testme(); Dispatching StartMicrofrontendEvent request for library6 from unpkg.com')
      window.dispatchEvent(new events.StartMicrofrontendEvent('#app6', '@padcom/mf-test-library6'))
    }
  }
}
</script>

<style scoped>
.app {
  background-color: aquamarine;
}

h1 {
  color: darkgreen;
}
</style>
