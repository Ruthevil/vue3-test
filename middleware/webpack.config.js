/**
 * Created by 86185 in 2020/8/15 on 17:39
 */
const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");

module.exports = {
    mode: "none",
    entry: {
        server: "./src/index.js"
    },
    output: {
        path: path.resolve(__dirname, "./build/"),
        filename: "[name].bundle.js",
    },
    resolve: {
        extensions: [".js", "jsx"],
        alias: {
            "@": path.resolve("src")
        }
    },
    plugins: [],
    externals: [
        nodeExternals()
    ],
    target: "node",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
        ]
    },
    node: {
        fs: "empty",
    }
}
