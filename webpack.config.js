const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');

module.exports = {
    mode: "development",
    entry: {
        index: './asset/IndexController.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public/dist')
    },
    plugins: [
        new CleanWebpackPlugin(['public/dist']),
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
            },
            {
                test: /\.vue$/,
                use: [
                    'vue-loader',
                ]
            },
            { // 查找CSS提供给 style-loader 和 css-loader，将其打包到js中
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }, { // 读入图片
                test: /\.(png|jpg|jpeg|gif|svg)/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]?[hash]',
                            publicPath: "dist/"
                        }
                    }
                ]
            }, {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[path][name].[ext]',
                            publicPath: 'dist/',
                        }
                    }
                ]
            }
        ]
    }
};