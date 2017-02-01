var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: __dirname + '/app/index.js',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
            test: /\.json$/,
            loader: 'json'
      },
      {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader","sass-loader"]
      },
      {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query:
            {
              presets:['react']
            }
      }
    ]
  },
  output: {
    filename: 'transformed.js',
    path: __dirname + '/build'
  },
  plugins: [HTMLWebpackPluginConfig]
};
