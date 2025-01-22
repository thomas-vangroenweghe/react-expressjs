const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/client/index.tsx',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/client/public/index.html',
            favicon: './src/client/public/favicon.ico',
            title: "Web app",
            description: "Web application"
        })
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    devServer: {
        static: './build',
        compress: true,
        watchFiles: ['./src/client**'],
        historyApiFallback: true,
        hot: true,
        port: 3001,
    }
};