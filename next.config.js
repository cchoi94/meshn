
const withCss = require('@zeit/next-css')
// module.exports = withCss()

const withSass = require('@zeit/next-sass')
// module.exports = withSass()

const { parsed: localEnv } = require('dotenv').config()
const webpack = require('webpack')
// const commonsChunkConfig = require('@zeit/next-css/commons-chunk-config')

module.exports = withSass(withCss({
  webpack(config) {
    // config = commonsChunkConfig(config, /\.(sass|scss|css)$/)
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv))

    return config
  },
  env: {
    'API_KEY': process.env.API_KEY,
    'AUTH_DOMAIN': process.env.AUTH_DOMAIN,
    'DATABASE_URL': process.env.DATABASE_URL,
    'PROJECT_ID': process.env.PROJECT_ID,
    'STORAGE_BUCKET': process.env.STORAGE_BUCKET,
    'APP_ID': process.env.APP_ID,
    'SITE_KEY': process.env.SITE_KEY
  }
}))

