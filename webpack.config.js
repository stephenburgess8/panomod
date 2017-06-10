const webpack = require("webpack");

module.exports = {
  entry: `${__dirname}/src/index.jsx`,
  output: {
    path: `${__dirname}/build`,
    publicPath: "/build/",
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "react", "stage-1"]
        }
      },
      { test: /\.less$/, loaders: ["style-loader", "css-loader", "less-loader"] }
    ]
  },

  resolve: {
    extensions: [".js", ".jsx", ".less"],
  },

  plugins: process.argv.indexOf("-p") === -1 ? [] : [
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,
      },
    }),
  ],
};
