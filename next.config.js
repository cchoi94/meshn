
const withCss = require('@zeit/next-css')
// module.exports = withCss()

const withSass = require('@zeit/next-sass')
// module.exports = withSass()

require('dotenv').config()
const webpack = require('webpack')
// const commonsChunkConfig = require('@zeit/next-css/commons-chunk-config')


module.exports = withSass(withCss({
  // webpack(config) {
 
  //   config.plugins.push(new webpack.EnvironmentPlugin(localEnv))

  //   return config
  // }

  webpack: (config) => {
    config.plugins.push(
      new webpack.EnvironmentPlugin(process.env),
    )
    return config
  }
}))



// require('dotenv').config()
// const webpack = require('webpack')

// module.exports = {
//   webpack: (config) => {
//     config.plugins.push(
//       new webpack.EnvironmentPlugin(process.env),
//     )
//     return config
//   }
// }

