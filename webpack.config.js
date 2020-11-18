// 'use strict';
// const path = require('path');
// const distDir = path.resolve(__dirname, 'dist');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');

// module.exports = {
//     entry: './index.js',
//     output: {
//         filename: 'bundle.js',
//         path: distDir
//     },
//     devServer: {
//         contentBase: distDir,
//         port: 4001
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             title: 'Sample Webpack Bundler App',
//         }),
//         new webpack.ProvidePlugin({
//             $: 'jquery',
//             jQuery: 'jquery'
//         })
//     ],
//     module: {
//         rules: [{
//             test: /\.css$/,
//             use: [ 'style-loader', 'css-loader' ]
//         },{
//             test: /\.(png|woff|woff2|ttf|svg)$/,
//             use: [
//                 {
//                     loader: 'url-loader',
//                     options: {
//                         limit: 100000,
//                     }
//                 }
//             ]
//         }],
//     }
// };

// TYPE-SCRIPT
'use strict';
const path = require('path');
const distDir = path.resolve(__dirname, 'dist');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './app/index.ts',
    output: {
        filename: 'bundle.js',
        path: distDir
    },
    devServer: {
        contentBase: distDir,
        port: 4001
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Sample Webpack Bundler App',
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],
    module: {
        rules: [{
            test: /\.ts$/,
            loader: 'ts-loader'
        },{
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        },{
            test: /\.(png|woff|woff2|ttf|svg)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 100000,
                    }
                }
            ]
        }],
    }
};