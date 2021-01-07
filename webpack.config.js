const path = require("path");
const webpack = require('webpack');

module.exports = () => ({
    entry: [
        "@babel/polyfill",
        path.join(__dirname, "client", "src", "start.js"),
    ],
    output: {
        path: path.join(__dirname, "client", "public"),
        filename: "bundle.js",
    },
    performance: {
        hints: false,
    },
    devServer: {
        contentBase: path.join(__dirname, "client", "public"),
        proxy: {
            "/": {
                target: "http://localhost:3001",
            }
        },
        port: "3000",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
            }
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            apiKey: JSON.stringify(require('./env.json'))
        })
    ]
});
