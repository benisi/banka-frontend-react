let HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  mode: 'production',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js | jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(
      {
        title: 'Banka',
        template: './src/index.html'
      }
    ),
  ],
  output: {
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    contentBase: './dist'
  }
};