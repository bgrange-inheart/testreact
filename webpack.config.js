const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

  module.exports = {
    mode: 'development',
    entry: {
      app: './src/app.js'
    },
    
    module: {
        rules: [
          { test: /\.(js|jsx)$/, 
            exclude: /node_modules/,
            use: 'babel-loader' 
          },
          { test: /\.css$/, use: ['style-loader', 'css-loader'] },
          { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }
        ]
    },

    devtool: 'inline-source-map',

    devServer: {
        contentBase: './dist',
    },

    plugins: [
     new CleanWebpackPlugin(),
     new HtmlWebpackPlugin({
       title: 'Output Management',
       template: "./src/index.html",
       filename: "./index.html"
     }),
   ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
  };