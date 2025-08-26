// Webpack config (ES6 Compatible) with full comments

import path from "path";
import { fileURLToPath } from "node:url";
import TerserPlugin from "terser-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import { WebpackManifestPlugin } from "webpack-manifest-plugin";
import StylelintPlugin from "stylelint-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";

// Get current file path and directory
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

// Detect if we're in development mode
const isDev = process.argv.includes("--watch");

// Base plugins always applied
const plugins = [
  new MiniCssExtractPlugin({
    filename: "css/[name].[contenthash].css",
    chunkFilename: "css/[id].[contenthash].css",
  }),
  new WebpackManifestPlugin({
    publicPath: "/",     // Ensure proper public path
    basePath: "",        // No double prefix
  }),
];

// Add linting plugins only for production builds
if (!isDev) {
  plugins.push(
    new StylelintPlugin({
      configFile: path.resolve(dirname, "config/stylelint.config.js"),
      context: "source/scss",
      files: "**/style.scss",
      failOnError: true,
      fix: false,
    }),
    new ESLintPlugin({
      context: "source/js",
      extensions: ["js"],
      overrideConfigFile: path.resolve(dirname, "config/eslint.config.js"),
      failOnError: true,
      fix: false,
    })
  );
}

// Export Webpack config object
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
      {
        test: /\.(png|jpe?g|gif|svg|webp|avif)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext][query]",
        },
      },
    ],
  },

  resolve: {
    extensions: [".scss"],
    alias: {
      "@scss": path.resolve(dirname, "source/scss"),
    },
  },

  plugins,

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
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};
