const path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        main: './src/main.jsx'
    },
    output: {
        path: path.join(__dirname, 'app/build'),
        filename: '[name].bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'app/build'),
        publicPath: 'http://localhost:8181/build'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common.js'),
        new webpack.HotModuleReplacementPlugin()
    ]
}