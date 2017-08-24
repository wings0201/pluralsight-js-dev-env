import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    // create html file that includes reference to bundle JS
    new HtmlWebpackPlugin({
        template : './src/index.html',
        minify : {
            removeComments : true,
            collapseWhitespace : true,
            removeRedundantAttributes : true,
            useSHortDoctype : true,
            removeEmptyAttributes : true,
            removeStyleLinkTypeAttributes : true,
            keepClosingSlash : true,
            minifyJS : true,
            minifyCSS : true,
            minifyURLs : true
        },
        inject : true
    }),

    // Eleminate duplicate package when generating bundle
    new webpack.optimize.DedupePlugin(),

    // minify js
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}
