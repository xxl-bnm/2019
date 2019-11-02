'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
<<<<<<< HEAD
  API_URL:'"http://api.cat-shop.penkuoer.com"',
})
=======
  API_URL:'"http://api.cat-shop.penkuoer.com"'
})
>>>>>>> dev
