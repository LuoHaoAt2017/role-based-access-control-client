const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  entry: {
    'home': './src/index.ts',
    'index': './modules/login/index.ts',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: /\.vue$/
        }
      },
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      },
      {
        test: /\.(css|less)$/,
        use: ['vue-style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.(png|svg|jpg)$/,
        use: ['file-loader'],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./public/index.html'),
      favicon: path.resolve('./public/favicon.ico'),
      title: '基于角色的权限设计-首页',
      filename: 'home.html',
      chunks: ['home']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve('./public/index.html'),
      favicon: path.resolve('./public/favicon.ico'),
      title: '基于角色的权限设计-登录',
      filename: 'index.html',
      chunks: ['index']
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: [
      '.js', '.ts', '.vue'
    ]
  },
}