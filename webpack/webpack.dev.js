const webpack = require("webpack")
module.exports = {
   mode: "development",
   devtool: "cheap-module-source-map",
   devServer: {
      host: "localhost",
      port: 8000,
      hot: true,
      open: true,
   },
}
