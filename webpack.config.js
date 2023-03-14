/* eslint-disable import/no-anonymous-default-export */
// const path = require('path')
// const webpack = require('webpack')

// module.exports = {
//   resolve: {
//     alias: {
//       crypto: require.resolve('crypto-browserify'),
//     },
//     fallback: {
//       os: require.resolve('os-browserify/browser'),
//       buffer: require.resolve('buffer/'),
//       path: require.resolve('path-browserify'),
//       stream: require.resolve('stream-browserify'),
//       fs: require.resolve('browserify-fs'),
//       util: require.resolve('util/'),
//       buffer: require.resolve('buffer/'),
//     },
//   },
//   plugins: [
// new webpack.DefinePlugin({
//   'process.env': {
//     KEY: JSON.stringify(process.env.KEY),
//     VECTOR: JSON.stringify(process.env.VECTOR),
//   },
// }),
// fix "process is not defined" error:
// new webpack.ProvidePlugin({
//   process: 'process/browser',
// }),
// Work around for Buffer is undefined:
// https://github.com/webpack/changelog-v5/issues/10
// new webpack.ProvidePlugin({
//   Buffer: ['buffer', 'Buffer'],
// }),
//   ],
// }

import webpack from 'webpack'
import crypto from 'crypto-browserify'
import os from 'os-browserify/browser'
import buffer from 'buffer/'
import path from 'path-browserify'
import stream from 'stream-browserify'
import fs from 'browserify-fs'
import util from 'util/'

export default {
  resolve: {
    alias: {
      crypto,
    },
    fallback: {
      os,
      buffer,
      path,
      stream,
      fs,
      util,
      buffer,
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
  ],
}
