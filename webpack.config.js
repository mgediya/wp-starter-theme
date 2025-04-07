import path from "path";
import { fileURLToPath } from "node:url";
import TerserPlugin from "terser-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import { WebpackManifestPlugin } from "webpack-manifest-plugin";
import StylelintPlugin from "stylelint-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const isDev = process.argv.includes("--watch");
export default {
  mode: isDev ? "development" : "production",
  entry: {
    main: ["./source/js/script.js", "./source/scss/style.scss"],
  },
  output: {
    path: path.resolve(dirname, "public"),
    filename: "js/[name].[contenthash].js",
    clean: true,
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash].css",
      chunkFilename: "css/[id].[contenthash].css",
    }),
    new WebpackManifestPlugin({
      publicPath: "public",
      basePath: "public",
    }),
    // lint will run on every build, so we need to check if we are in dev mode
    ...(!isDev ? [
        new StylelintPlugin({
          configFile: path.resolve(dirname, "config/stylelint.config.js"),
          context: "source/scss",
          files: "**/*.scss",
          failOnError: true,
          fix: true
        }),
        new ESLintPlugin({
          context: "source/js",
          extensions: ["js"],
          overrideConfigFile: path.resolve(dirname, "config/eslint.config.js"),
          failOnError: true,
          fix: false,
        })
    ]:[]),
  ],
  optimization: {
    minimize: !isDev,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: !isDev,
          },
        },
      }),
      new CssMinimizerPlugin(),
    ],
  },
  devtool: isDev ? "source-map" : false,
  watch: isDev,
  stats: {
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false,
  },
  performance: {
    hints: isDev ? false : "warning",
    maxEntrypointSize: 512000, // 500kb
    maxAssetSize: 512000, // 500kb
  },
};
