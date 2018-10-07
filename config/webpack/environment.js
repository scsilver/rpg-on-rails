const { environment } = require('@rails/webpacker')
const customConfig = require('./webpack.config')
environment.config.merge(customConfig)
module.exports = environment
