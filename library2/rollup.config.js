import jsx from 'rollup-plugin-jsx'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

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
    commonjs(),
    jsx({ factory: 'React.createElement' }),
  ]
}
