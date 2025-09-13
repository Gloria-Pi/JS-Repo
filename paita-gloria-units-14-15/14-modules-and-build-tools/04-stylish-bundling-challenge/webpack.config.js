const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { optimize } = require('webpack');

module.exports = {
    //mode: 'production', //production or development
    entry: {
        main: path.resolve(__dirname, 'src/scripts/main.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        assetModuleFilename: '[name][ext]',
        clean: true,
    },
    devtool: 'inline-source-map', //or just 'source-map'. Useful for debugging.
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 5001,
        open: true,
        hot: true,
        compress: true, //reduce file sizes when serving JS, CSS, etc
        //historyApiFallback: true //all unknown routes will return index.html -> the FE router will handle them

    },
    optimization: {
        minimize: true //minimizes the output
    },

    //loaders
    module: {
        rules: [
            //DEVELOPMENT: SASS & CSS
            // {
            //     test: /\.(scss|css)$/i,
            //     use: ['style-loader', 'css-loader', 'sass-loader']
            // },

            //PRODUCTION: SASS & CSS
            {
                test: /\.(scss|css)$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },


            //Images
            {
                test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[name][ext]'
                }
            },

            //JS for Babel
            {
                test: /\.m?js$/,
                exclude: /node_modules|bower_components/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [[
                            '@babel/preset-env',
                            {
                                targets: { edge: '127', firefox: '128', chrome: '127', safari: '17.5', ie: '11' },
                                //targets '> 0.25%, not dead',
                                useBuiltIns: 'usage',
                                corejs: '3.21.1' //specifies the version of core-js to use for polyfilling when useBuiltIns: 'usage' (?)

                            }
                        ]]
                    }
                }
            }
        ]
    },

    //plugins
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Demo Page',
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/template.html')
        }),

        new MiniCssExtractPlugin({
            filename: 'style.[contenthash].css',

        })
    ]

};