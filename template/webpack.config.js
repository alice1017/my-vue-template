const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

const resolve = (...files) => path.resolve(__dirname, ...files);
const join = (...files) => path.join(...files);

module.exports = {
    entry: {
        main: join(resolve("src"), "main.js")
    },
    output: {
        path: resolve("dist"),
        filename: "index.js"
    },
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.esm.js"
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: [
                        [
                            "@babel/preset-env",
                            {
                                targets: {
                                    ie: 11
                                },
                                useBuiltIns: "usage",
                                corejs: 3
                            }
                        ]
                    ]
                }
            }
        }, {
            test: /\.vue$/,
            use: {
                loader: "vue-loader"
            }
        }, {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};
