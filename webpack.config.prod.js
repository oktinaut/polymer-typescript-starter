const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    devtool: "inline-source-map",
    entry: "./src/index.ts",
    mode: "production",
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "bundle.js",
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".html"],
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" },
            { test: /\.html/, loader: "html-loader" },
        ]
    },
    plugins: [
        new CopyPlugin([
            { from: "public" },
            { from: "node_modules/@webcomponents", to: "node_modules/@webcomponents" },
        ]),
        new UglifyJsPlugin({
            extractComments: true,
            uglifyOptions: {
                ecma: 6,
                keep_fnames: true,
            },
        }),
    ],
}