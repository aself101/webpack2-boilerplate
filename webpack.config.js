const webpack = require('webpack');
const path = require('path');


const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: [
            'react'
          ]
        },
        include: [
          path.resolve(__dirname, 'src')
        ]
      }
    ]
  }
};

module.exports = config;
