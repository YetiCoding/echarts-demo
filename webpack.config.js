HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        'main': './src/app/main.ts'
    },
    output: {
        path: 'release',
        publicPath: '/release/',
        filename: '[name].bundle.js'
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        contentBase: './'
    },
    plugins: [new HtmlWebpackPlugin({
        filename:'index.html',
        inject:'body',
        template:'./src/pages/index.template.html'
    })],
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.png$/,
            loader: 'url-loader?limit=100000'
        }, {
            test: /\.jpg$/,
            loader: 'file-loader'
        }
            , {
            test: /\.gif$/,
            loader: 'file-loader'
        }
            , {
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.html$/,
            loader: 'html'
        }, {
            loader: 'babel',
            test: /\.js$/
        },{
            test: /\.ts$/, 
            loader: 'ts-loader'
        }]
    }
};
