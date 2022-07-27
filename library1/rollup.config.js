import vue from 'rollup-plugin-vue'
import resolve from '@rollup/plugin-node-resolve'

export default {
  input: [
    './src/index.js',
  ],
  output: [ {
    dir: 'dist',
    format: 'esm',
    sourcemap: true,
  } ],
  plugins: [
    resolve(),
    vue(),
  ]
}
