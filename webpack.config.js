const path = require('path');
const webpack = require('webpack');
let htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname + '/app',
    entry: ['./main.jsx'],
    output: {
        path: path.resolve(__dirname + '/dist'),
        filename : 'bundle.js',
        //publicPath: "http:/cdn.com" //在引用文件加上绝对路径
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader?cacheDirectory",
                exclude: /node_modules/,
                include: /app/
            },
            {
                test: /\.css$/,
                //loaders: ['style-loader','css-loader?postcss-loader']
                use:[
                    'style-loader','css-loader?minimize?importLoaders=1','postcss-loader'
                ]
            },
            {
                test: /\.less/,
                //loaders: ['style-loader','css-loader?postcss-loader']
                use:[
                    'style-loader','css-loader?minimize?importLoaders=1','postcss-loader','less-loader'
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                loaders: [
                    'file-loader?hash=sha512&digest=hex&name=[hash:5].[ext]',
                    'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]

            }


        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $ : "jquery",
            jQuery : "jquery",
            "window.jQuery" : "jquery"
        }),
        //new ExtractTextPlugin('[name].css'),

        new htmlWebpackPlugin({
            template: __dirname + '/build/index.html',
            filename: 'index.html',
            title: '111',
            //inject: false,  //将引用的文件放到哪里
            //chunks: ['main'],    //只引入mian
            //excludeChunks: ['main'], //刚好和chunks相反
            // minify: {
            //     removeComments: true,   //删除注释
            //     collapseWhitespace: true,   //删除空格
            // }

        }),


    ],
    devServer: {
        disableHostCheck : true,

    }
};