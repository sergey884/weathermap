'use strict';

const webpack = require('webpack');
const path = require('path');

const development = process.env.NODE_ENV === 'development';

module.exports = {
    entry : [
        'babel-polyfill',
        './src/index'
    ],
    output : {
        path : path.resolve(__dirname, 'public'),
        filename : "bundle.js",
        library : "[name]"
    },
    devtool : development ? "inline-cheap-source-map" : "source-map",
    module : {
        rules : [
            {
                test : /\.js$/,
                enforce : "pre",
                exclude : /node_modules/,
                use : {
                    loader : "eslint-loader"
                }
            },
            {
                test : /\.js$/,
                exclude : /node_modules/,
                include : path.resolve(__dirname, 'src'),
                use : {
                    loader : 'babel-loader',
                    options : {
                        presets : ['es2015', 'stage-0', 'react'],
                        plugins : ['transform-runtime']
                    }
                }
            }
        ]
    },
    plugins : [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
    devServer : {
        contentBase : path.resolve(__dirname, 'public'),
        host : "localhost",
        port : 8080
    }
};