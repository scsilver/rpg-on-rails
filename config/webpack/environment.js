const { environment, loaders } = require('@rails/webpacker')
const customConfig = require('./webpack.config')
delete loaders.babel.exclude
module.exports = environment
