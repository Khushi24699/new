const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const packageMeta = require('./package.json')

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    entry: './src/main.jsx',
    resolve: {
        alias: {
            react: path.resolve('./node_modules/react')
        },
        extensions: ['.js', '.jsx'],

    },

    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader' // will use .babelrc
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    output: {
        filename: 'main.js',
        path: path.join(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: packageMeta.title
        })
    ],
    // devServer: {
    //   disableHostCheck: true // for codepen.io, REMOVE THIS IN YOUR PROJECT
    // }
}