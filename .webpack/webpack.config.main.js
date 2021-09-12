import HtmlWebpackPlugin from "html-webpack-plugin";
import ImageMinimizerPlugin from "image-minimizer-webpack-plugin";

export default {
  mode: "production",
  entry: "./src/index.js",
  output: {
    // filename: "main.js",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: "!!html-loader!prerender-loader!./src/index.html",
      inject: false,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(html)$/,
        loader: "html-loader",
        options: {
          esModule: true,
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: "asset",
      },
      {
        test: /\.(png)$/i,
        generator: { filename: "[hash].jpeg[query]" },
        use: [
          {
            loader: ImageMinimizerPlugin.loader,
            options: {
              minimizerOptions: {
                plugins: [["png-to-jpeg", { quality: 60 }]],
              },
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
