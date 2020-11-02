const copyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = (env) => {
  const isDevBuild = !(env && env.prod);
  return [
    {
      entry: {
        app: "./src",
      },
      output: {
        path: path.resolve("./dist"),
        filename: "jemiBtnWidget.js",
      },
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules)/,
            use: {
              loader: "babel-loader",
            },
          },
          {
            test: /\.css$/,
            use: [
              "style-loader",
              "css-loader" + (isDevBuild ? "" : "?minimize"),
            ],
          },
          {
            test: /\.html$/,
            use: {
              loader: "html-loader",
            },
            test: /\.svg$/,
            use: {
              loader: "svg-url-loader",
            },
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: "file-loader",
              },
            ],
          },
        ],
      },
      plugins: isDevBuild
        ? [
            new webpack.SourceMapDevToolPlugin({ filename: "bundle.map" }),
            // new copyWebpackPlugin({ patterns: [{ from: "./demo/index.html" }] }),
          ]
        : [new webpack.optimize.UglifyJsPlugin()],
    },
  ];
};
