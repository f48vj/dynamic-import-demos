const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        hello: "./hello.js"
    },
    output: {
        filename: "[name].bundle.js",
        chunkFilename: "[name].chunk.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [new HtmlWebpackPlugin()]
};
