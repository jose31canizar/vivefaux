// var path = require('path');
var webpack = require('webpack');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var CompressionPlugin = require('compression-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
  entry: './app/index.js',
  module: {
    loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
    },
    {
    test: /.jsx?$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
    query: {
      presets: ['es2015', 'react']
      }
    },
    {
        test: /\.json$/,
        loader: 'json-loader'
    },
    {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
    },
    {
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap']
    },
    {
      test: /\.(eot|ttf|svg|woff|woff2)$/,
      loader: 'file-loader?name=app/assets/fonts/[name].[ext]'
    },
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
       loaders: [
         'url-loader?limit=8192'
    	]
    },
    {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:
        {
          presets:['react']
        }
    }]
  },
  output: {
      filename: 'bundle.js',
      path: __dirname + '/build'
  },
  plugins: [
    HTMLWebpackPluginConfig
  ]
};
