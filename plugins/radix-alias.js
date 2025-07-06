const alias = require('@rollup/plugin-alias');

module.exports = {
  plugins: [
    alias({
      entries: [
        { 
          find: /^@radix-ui\/react-progress$/, 
          replacement: require.resolve('./patched-progress') 
        }
      ]
    })
  ]
};