const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
   entry: {
      index: path.resolve(__dirname, "..", "./src/index.js"),
   },
   output: {
      path: path.resolve(__dirname, "..", "dist"),
      filename: "bundle.[name]-[hash].js",
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: path.resolve(__dirname, "..", "./public/index.html"),
      }),
   ],
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/,
            use: ["babel-loader"],
            // exclude: /node_modules/,
         },
         {
            test: /\.(css)$/,
            use: ["style-loader", "css-loader"],
            // exclude: /node_modules/,
         },
         {
            test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
            type: "asset/resource",
         },
         {
            test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
            type: "asset/inline",
         },
      ],
   },
}
