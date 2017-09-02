 const merge = require('webpack-merge');
 const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
 const common = require('./webpack.common.js');
 const webpack = require('webpack')
 module.exports = merge(common, {
   devtool: 'cheap-module-source-map',
   plugins: [
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
    'process.env': {
        'NODE_ENV': JSON.stringify('production')
    }
    }),
    new webpack.optimize.CommonsChunkPlugin({
       name: 'common' // Specify the common bundle's name.
    })
   ]
 });