import HtmlWebpackPlugin from 'html-webpack-plugin';
import ImageMinimizerPlugin from 'image-minimizer-webpack-plugin';

export default {
    mode: 'production',
    entry: './src/index.js',
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: './src/index.html'
        })
    ],
    output: {
        filename: 'main.js',
        clean: true
    },
    module: {
        rules: [
            {
              test: /\.css$/i,
              use: ["style-loader", "css-loader"],
            },
            {
              test: /\.(js|jsx)$/,
              exclude: /nodeModules/,
              use: {
                loader: 'babel-loader'
              }
            },
            {
                test: /\.(html)$/,
                use: ['html-loader']
            },
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
