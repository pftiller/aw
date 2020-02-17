const path = require("path");
const HtmlWebPackPlugin = require('html-webpack-plugin');
const {
    GenerateSW
} = require('workbox-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/bundle.js',
        publicPath: '/',
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'build')
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|j?g|jpe?g|svg|gif)$/i,
                include: path.join(__dirname, 'images'),
                use: 'file-loader',
                use: 'webp-loader'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/react', ],
                    plugins: ['@babel/plugin-proposal-class-properties']

                }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            hash: true
        }),
        new GenerateSW({
            swDest: 'sw.js'
        })
    ]
}