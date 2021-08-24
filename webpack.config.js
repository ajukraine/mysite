import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ImageMinimizerPlugin from 'image-minimizer-webpack-plugin';
import pngToJpeg from 'png-to-jpeg';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: './src/index.html'
        })
    ],
    output: {
        filename: 'main.js',
        path: resolve(__dirname, 'dist'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                type: "asset",
            },
            {
                test: /\.(png)$/i,
                generator: { filename: '[hash].jpeg[query]' },
                use: [{
                    loader: ImageMinimizerPlugin.loader,
                    options: {
                        minimizerOptions : {
                            plugins: [ ["png-to-jpeg", { quality: 60 }] ]
                        }
                    }
                }]
            }
        ]
    }
};