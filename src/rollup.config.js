// rollup.config.js
import url from '@rollup/plugin-url';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife'
  },
  plugins: [
    url({
      include: ['**/*.ogg'],
      limit: 0, // No limit on file size, include all
      emitFiles: true
    })
  ]
};