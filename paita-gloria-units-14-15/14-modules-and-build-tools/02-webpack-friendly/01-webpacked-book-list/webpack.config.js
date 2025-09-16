const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const autoprefixer = require('autoprefixer')


// Used with postcss-loader -> automatically adds vendor prefixes -> helps w compatibility
// const autoprefixer = require('autoprefixer')

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

        // This will watch all .html files inside src/ and trigger a reload when changes are made.
        watchFiles: [path.resolve(__dirname, 'src/**/*.html')],
    },
    optimization: {
        minimize: true //minimizes the output
    },

    //loaders
    module: {
        rules: [

            //Check if I'm in DEVELOPMENT or PRODUCTION
            {
                test: /\.css$/i,
                use: [
                    isProduction
                        ? MiniCssExtractPlugin.loader
                        : 'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    ['postcss-preset-env',
                                        {
                                            //options
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                ],
            },


            //Images
            {
                test: /\.(avif|svg|ico|png|webp|jpg|gif|jpeg)$/i,
                type: 'asset',
                generator: {
                    filename: 'assets/[name][ext]'
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 50 * 1024, // 50KB: images under threshold should be inlined, others emitted.
                    }
                },
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
            },

            // This lets Webpack resolve image URLs used inside HTML files.
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    sources: {
                        list: [
                            // All default supported tags and attributes
                            '...',
                            {
                                tag: 'img',
                                attribute: 'src',
                                type: 'src',
                            },
                        ],
                    },
                },
            },
        ]
    },



    //plugins
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpacked Book List',
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/temp.html')
        }),

        new MiniCssExtractPlugin({
            filename: 'style.[contenthash].css',

        })
    ]

};