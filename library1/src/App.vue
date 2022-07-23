<template>
  <div>
    <h1>Vue.js: Hello, {{ name }}! (library1)!</h1>
    <button @click="testme()">Click me!!!</button>
    <button @click="testme2()">Click me!!!</button>
  </div>
</template>

<script>
import { onMounted } from 'vue'

export default {
  props: {
    name: { type: String, default: 'John' }
  },
  setup() {
    onMounted(() => { console.log('[LIBRARY1] App.vue mounted') })

    const testme = () => { console.log('[LIBRARY1] App.setup/testme()') }

    return { testme }
  },

  // for reasons nobody knows (yet) nothing else works besides the setup()
  mounted() {
    console.log('[LIBRARY1] App.mounted()')
  },
  methods: {
    testme2() {
      console.log('[LIBRARY1] App.methods.testme2')
    }
  }
}
</script>
