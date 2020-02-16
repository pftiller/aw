const workboxPlugin = require('workbox-webpack-plugin');
var path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: '/',
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|j?g|jpe?g|svg|gif)$/i,
                use: 'file-loader',
                use: 'webp-loader'
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env',
                        '@babel/react', {
                            'plugins': ['@babel/plugin-proposal-class-properties']
                        }
                    ]
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
            filename: 'index.html'
        }),
        new workboxPlugin.GenerateSW({
            swDest: 'build/sw.js'
        })
    ]
}
