import mix from 'laravel-mix';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';

// Set output directory
mix.setPublicPath('assets');

// Webpack Configuration
mix.webpackConfig({
    plugins: [
        new CleanWebpackPlugin(), // Cleans 'assets' before each build
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()], // Minifies JavaScript files
    },
});

// Compile Assets
mix.js('source/js/main.js', 'js')
   .sass('source/scss/style.scss', 'css')
   .version();

// Enable source maps in watch mode
if (process.argv.includes('--watch')) {
    mix.sourceMaps();
}
