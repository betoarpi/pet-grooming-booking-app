const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

module.exports = {
  entry: './src/frontend/index.js',
  mode: 'development',
  output: {
    path: '/',
    filename: 'assets/app.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
      name: true,
      cacheGroups: {
        vendors: {
          name: 'vendors',
          chunks: 'all',
          reuseExistingChunk: true,
          priority: 1,
          filename: 'assets/vendor.js',
          enforce: true,
          test(module, chunks) {
            const name = module.nameForCondition && module.nameForCondition();
            return chunks.some((chunks) => chunks.name !== 'vendor' && /[\\/]node_modules[\\/]/.test(name));
          },
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: {
          loader: 'eslint-loader',
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              prependData: `
                @import "${path.resolve(__dirname, 'src/frontend/assets/styles/sass/fontawesome/fontawesome.scss')}";
                @import "${path.resolve(__dirname, 'src/frontend/assets/styles/sass/fontawesome/solid.scss')}";
                @import "${path.resolve(__dirname, 'src/frontend/assets/styles/sass/fontawesome/brands.scss')}";
                @import "${path.resolve(__dirname, 'src/frontend/assets/styles/sass/fontawesome/regular.scss')}";
                @import "${path.resolve(__dirname, 'src/frontend/assets/styles/sass/Mixins.scss')}";
                @import "${path.resolve(__dirname, 'src/frontend/assets/styles/sass/Variables.scss')}";
                @import "${path.resolve(__dirname, 'src/frontend/assets/styles/sass/Animations.scss')}";
                @import "${path.resolve(__dirname, 'src/frontend/assets/styles/sass/Layout.scss')}";
                @import "${path.resolve(__dirname, 'src/frontend/assets/styles/sass/Base.scss')}";
              `,
            },
          },
        ],
      },
      {
        test: /\.(png|gif|jpg|jpeg|svg)$/,
        use: [
          {
            'loader': 'file-loader',
            options: {
              name: 'assets/[hash].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/fonts',
              publicPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer(),
        ],
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/app.css',
    }),
  ],
};
