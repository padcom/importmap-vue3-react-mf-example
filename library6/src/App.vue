<template>
  <div class="app">
    <h6>{{ appName }}</h6>
    <h1>Vue.js: Hello, {{ name }}! (library6) {{ suffix }}</h1>
    <button @click="testme()">Click me!!!</button>
    <button @click="count++">+</button>
    <button @click="count--">-</button>
    <img src="./assets/vue.svg">
  </div>
</template>

<script>
import { onMounted, defineComponent } from 'vue'
import { events } from '@padcom/mf-test-common'

export default defineComponent({
  inject: [
    'appName'
  ],
  props: {
    name: { type: String, default: 'John' }
  },
  setup() {
    onMounted(() => { console.log('[LIBRARY6] App.vue/setup onMounted()') })
  },
  data() {
    return {
      count: 0
    }
  },
  computed: {
    suffix() {
      return `COUNT: ${this.count}`
    },
  },
  watch: {
    suffix(newValue) {
      console.log('[LIBRARY6] New suffix:', newValue)
    }
  },
  mounted() {
    console.log('[LIBRARY6] App.mounted()')
  },
  methods: {
    testme() {
      console.log('[LIBRARY6] App.methods.testme(); Dispatching StartMicrofrontendEvent request for library7')
      window.dispatchEvent(new events.StartVueAppEvent(
        '#app7',
        // 'http://localhost:3007/index.js',
        // 'http://localhost:3007/style.css',
        'https://unpkg.com/@padcom/mf-test-library7',
        'https://unpkg.com/@padcom/mf-test-library7/dist/style.css',
      ))
    }
  }
})
</script>

<style scoped>
.app {
  background-color: blanchedalmond;
}

h1 {
  color: deeppink;
}
</style>
