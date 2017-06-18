const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    context: __dirname + '/app',
    entry: {
        main : './main.jsx',
        vendors: ['jquery','react', 'react-dom', 'redux', 'react-redux', 'react-router-redux', 'react-router']
    },
    output: {
        path: path.resolve(__dirname + '/dist'),
        filename : '[name]-[hash].js',
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
        new htmlWebpackPlugin({
            template: __dirname + '/build/index.html',
            filename: 'index.html',
            title: '111',
            //inject: false,  //将引用的文件放到哪里
            //chunks: ['main'],    //只引入mian
            //excludeChunks: ['main'], //刚好和chunks相反
            minify: {
                removeComments: true,   //删除注释
                collapseWhitespace: true,   //删除空格
            }

        }),
        new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new webpack.optimize.DedupePlugin(),//去重复
        new webpack.optimize.CommonsChunkPlugin({
            name:"commons",
            filename: "commons.js",
            minChunks:2
        }),
        new webpack.ProvidePlugin({
            $ : "jquery",
            jQuery : "jquery",
            "window.jQuery" : "jquery"
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new ExtractTextPlugin('[name]-[hash].css'),
        new CleanWebpackPlugin(
            ['dist/*.js'],　 //匹配删除的文件
            {
                root: __dirname,       　　　　　　　　　　//根目录
                verbose:  true,        　　　　　　　　　　//开启在控制台输出信息
                dry:      false        　　　　　　　　　　//启用删除文件
            }
        )
        //当以node作为服务器时 打开gzip
        // new CompressionWebpackPlugin({ //gzip 压缩
        //     asset: '[path].gz[query]',
        //     algorithm: 'gzip',
        //     test: new RegExp(
        //         '\\.(js|css|jpg|gif|png)$'    //压缩 js 与 css
        //     ),
        //     threshold: 10,
        //     minRatio: 0.8
        // }),




    ]

};