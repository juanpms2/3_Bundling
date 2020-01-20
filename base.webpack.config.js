const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require("path");

const basePath = __dirname;

module.exports = {
    context: path.join(basePath, "src"),
    resolve: {
        extensions: [".js", ".ts", ".jsx", ".tsx"]
    },
    entry: {
      app: ["regenerator-runtime/runtime", "./index.tsx"],
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
                test: /\.(png|jpg)$/,
                exclude: /node_modules/,
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
    ]
};