const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const path = require("path");

const basePath = __dirname;

module.exports = {
    context: path.join(basePath, "src"),
    resolve: {
        extensions: [".js", ".ts", ".jsx", ".tsx"]
    },
    entry: {
      app: ["regenerator-runtime/runtime", "./student.tsx"],
      appStyles: [
          "./styles.scss",
        ],
    },
    optimization: {
        splitChunks:{
            cacheGroups: {
                vendor: {
                    chunks: "all",
                    name: "vendor",
                    test: /[\\/]node_modules[\\/]/,
                    enforce: true,
                },
            },
        },
    },
    output: {
        filename: "[name].[chunkhash].js",
    },
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                enforce: 'pre',
                loader: 'eslint-loader',
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: "awesome-typescript-loader",
                options: {
                    useBabel: true,
                    babelCore: "@babel/core" // needed for Babel v7
                }
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[name]_[local]_[hash:base64:5]",
                            },
                            localsConvention: "camelCase",
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass")
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [ MiniCssExtractPlugin.loader, "css-loader" ] // Empieza a cargar por el final del array
            },
            {
                test: /\.(png|jpg)$/,
                exclude: /node_modules/,
                // loader: "url-loader?limit=5000" // nos permite especificar un tamaño de imagen para que las incluya directamente en el .js
                //loader: "file-loader",
                use: [
                    {
                        loader: "file-loader",
                        options: {
                        esModule: false
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html", // este es el nombre del fichero que se genera en la carpeta dist
            template: "index.html", // fichero de origen
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[chunkhash].css",
            chunkFilename: "[id].[chunkhash].css"
        }),
    ]
};