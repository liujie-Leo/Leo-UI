module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      'prismjs',
      {
        languages: ['javascript', 'css', 'markup'],
        plugins: ['line-numbers'],
        theme: 'solarizedlight',
        // theme: 'tomorrow',
        css: true
      }
    ]
  ]
}