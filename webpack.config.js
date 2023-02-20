const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('./vue-loader');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  devtool: false,
  module: {
    rules: [
      {
        test: /\.vue$/,
        // loader: 'vue-loader'
        loader: path.resolve(__dirname, 'vue-loader'),
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: true,
    }),
  ],
};
