const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const devMode = process.env.NODE_ENV !== 'production';

const extractLoader = {
  loader: MiniCssExtractPlugin.loader,
  options: {
    publicPath: 'dist',
  },
};

module.exports = {
  devtool: false,
  context: path.resolve(__dirname, './'),
  entry: './src/main.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.scss/,
        exclude: /node_modules/,

        use: [
          devMode ? 'style-loader' : extractLoader,
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              url: false,
            },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'images/[hash]-[name].[ext]',
              publicPath: 'assets',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg|png|jpg|gif)$/,
        include: /node_modules/,
        loader: 'file-loader',
      },
      {
        test: /\.(ts|tsx)?$/,
        loader: 'ts-loader',
        exclude: /(node_modules|bower_components)/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    modules: [path.resolve('./node_modules')],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
    compress: true,
    port: 9000,
    hot: true,
  },
  stats: { colors: true },
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
      chunkFilename: '[id].css',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/assets/images',
          to: 'assets/images',
        },
      ],
    }),
  ],
};
