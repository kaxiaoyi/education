var webpack = require('webpack');

module.exports = {
    entry: {
        "main": "./src/main.js"
    },
    output: {
        path: __dirname + "/dist",
        filename: '[name].js'
    },
    module: {
        rules: [{
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devtool: "chep-eval-source-map",
    resolve: {
        alias: {
            "vue": "vue/dist/vue.js"
        }
    },
    devServer: {
        open: true,
        port: 9000,
        inline:true
    },
    plugins:[ 
        new webpack.HotModuleReplacementPlugin()
    ]
}