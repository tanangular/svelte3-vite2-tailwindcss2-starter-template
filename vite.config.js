const svelte = require('rollup-plugin-svelte')

module.exports = {
  alias: {
    '@app': '',
    '@components': '/components',
    '@css': '/assets/css',
    '@js': '/assets/js',
  },
  root: './src',
  // build: {
  //   outDir: '../dist'
  // },
  plugins: [
    svelte()
  ]
}
