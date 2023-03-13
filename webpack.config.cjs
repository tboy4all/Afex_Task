const path = require('path')
const webpack = require('webpack')
const dotenv = require('dotenv').config()

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      crypto: require.resolve('crypto-browserify'),
    },
    fallback: {
      os: require.resolve('os-browserify/browser'),
      buffer: require.resolve('buffer/'),
      path: require.resolve('path-browserify'),
      stream: require.resolve('stream-browserify'),
      fs: require.resolve('browserify-fs'),
      util: require.resolve('util/'),
      buffer: require.resolve('buffer/'),
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        KEY: JSON.stringify(process.env.KEY),
        VECTOR: JSON.stringify(process.env.VECTOR),
      },
    }),
    // fix "process is not defined" error:
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    // Work around for Buffer is undefined:
    // https://github.com/webpack/changelog-v5/issues/10
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
  ],
}
