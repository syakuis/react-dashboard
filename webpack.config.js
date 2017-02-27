var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

process.traceDeprecation = true

module.exports = {
  entry: './src/index.js',
  output: {
    path: 'dist',
    publicPath: '',
    filename: '[name].js'
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons/commons.js'
    }),
    new ExtractTextPlugin({
      filename: './[name].css'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      chunks: [ 'commons', 'main' ],
      filename: './index.html',
      template: './src/index.html'
    })

  ],

  module: {
    rules: [
      {
        test: [/\.jsx$/, /\.js$/],
        enforce: 'pre',
        loader: 'eslint-loader',
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: 'file-loader?name=[hash].[ext]&publicPath=fonts/&outputPath=fonts/'
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: 'file-loader?name=[hash].[ext]&publicPath=images/&outputPath=images/'
      },
      {
        // test: /\.jsx$/, // 로더를 사용할 확장자를 추가합니다.
        test: [/\.js$/],
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader', // 로더를 설정합니다.
        query: {
          presets: [ 'react', ['es2015', {'loose': true}] ]
        }
      }
    ]
  },
  devServer: {
    inline: true,
    hot: true,
    port: 8008,
    host: '0.0.0.0',
    contentBase: './dist'
  }
}
