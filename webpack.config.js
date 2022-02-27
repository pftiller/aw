const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const path = require("path");
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: 'js/bundle.js',
    publicPath: "/"
  },
  resolve: {
    alias: {
      process: "process/browser"
  }
},
  module: {
    rules: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(png|jpe?g|svg)$/i,
        use: [
          "file-loader",
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
              },
              optipng: {
                enabled: true,
              },
              pngquant: {
                disable: true
              },
              gifsicle: {
                disable: true
              },
              webp: {
                quality: 75
              }
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      }
    ]
  },
  plugins: [
    new Dotenv(),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: './index.html',
      manifest: "./manifest.json",
      favicon: "./favicon.ico"
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      swDest: './sw.js'
    }),
    new CopyPlugin({
      patterns: [
          {
              from: path.resolve(__dirname, './src/images'),
              to: path.resolve(__dirname, 'build/images')
          }
      ]
  })
  ],
  devServer: {
    compress: true
  }
};