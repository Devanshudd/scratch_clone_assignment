const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

process.env["NODE_ENV"] = "production";

module.exports = merge(common, {
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
  output: {
    path: path.resolve(__dirname, "build"), // Specify the directory for the build output
    filename: "bundle.js", // Specify the filename for the bundled JavaScript file
  },
});
