const path = require('path');

const autoprefixer = require('autoprefixer');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const webpack = require('webpack');

let WEBPACK_LOCAL_CONFIG;
try {
  /* eslint-disable-next-line global-require */
  WEBPACK_LOCAL_CONFIG = require('./webpack-local.config');
} catch (e) {
  WEBPACK_LOCAL_CONFIG = {};
}

const paths = {
  src: path.resolve(__dirname, './src'),
  build: path.resolve(__dirname, './dist'),
  assets: path.resolve(__dirname, './assets'),
};

const PORT = WEBPACK_LOCAL_CONFIG.port || 9000;
const IP = WEBPACK_LOCAL_CONFIG.ip || '0.0.0.0';
const HTTPS = WEBPACK_LOCAL_CONFIG.https || true;
const AUTOOPEN = WEBPACK_LOCAL_CONFIG.open || false;

const aliases = {
  '@src': paths.src,
  '@assets': paths.assets,
  '@icons': `${paths.assets}/icons`,
  '@api': `${paths.src}/api`,
  '@types': `${paths.src}/types`,
  '@styles': `${paths.src}/styles`,
  '@utils': `${paths.src}/utils`,
  '@components': `${paths.src}/components`,
  '@containers': `${paths.src}/containers`,
  '@slices': `${paths.src}/api/slices`,
  '@middlewares': `${paths.src}/api`,
  '@layouts': `${paths.src}/layouts`,
  '@pages': `${paths.src}/pages`,
  '@sagas': `${paths.src}/api/sagas`,
};

const IS_DEV = process.env.NODE_ENV === 'development';

module.exports = {
  mode: IS_DEV ? 'development' : 'production',

  entry: {
    bundle: ['@babel/polyfill', path.resolve(__dirname, './src/main.ts')],
  },

  output: {
    filename: IS_DEV ? '[name].js' : '[name].[chunkhash].js',
    path: paths.build,
    publicPath: '/',
  },

  devServer: {
    publicPath: '/',
    host: IP,
    disableHostCheck: !!WEBPACK_LOCAL_CONFIG.disableHostCheck,
    contentBase: path.join(__dirname, 'dist'),
    stats: 'errors-only',
    port: PORT,
    overlay: true,
    historyApiFallback: true,
    hot: true,
    compress: true,
    quiet: false,
    inline: true,
    https: HTTPS,
    open: AUTOOPEN,
  },
  module: {
    rules: [
      {
        test: /\.vue$/i,
        exclude: /(node_modules)/,
        use: {
          loader: 'vue-loader',
          options: {
            esModule: true,
          },
        },
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
      {
        test: /\.(woff|woff2|ttf|otf)$/,
        use: {
          loader: 'url-loader',
        },
      },
      {
        test: /\.scss$/,
        use: [
          IS_DEV ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: true,
              modules: {
                localIdentName: IS_DEV
                  ? '[local]__[contenthash:base64:5]'
                  : '[contenthash:base64:5]',
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                sourceMap: true,
                plugins: [autoprefixer()],
              },
            },
          },
          { loader: 'sass-loader', options: { sourceMap: true } },
          {
            loader: 'sass-resources-loader',
            options: { resources: [`${paths.src}/styles/_const.scss`] },
          },
        ],
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      {
        test: /\.svg$/,
        use: [
          'babel-loader',
          {
            loader: 'vue-svg-loader',
            options: {
              svgo: {
                plugins: [{ removeTitle: false }],
                floatPrecision: 2,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin(),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'assets/index.html'),
      filename: 'index.html',
      inject: true,
      alwaysWriteToDisk: true,
      hash: IS_DEV,
      minify: {
        collapseWhitespace: true,
        html5: true,
        removeComments: true,
      },
    }),
    new webpack.ProvidePlugin({
      CONST: [`${paths.src}/utils/const`, 'default'],
    }),
    new webpack.DefinePlugin({
      IS_DEV,
      __VUE_OPTIONS_API__: false,
      __VUE_PROD_DEVTOOLS__: false,
    }),
    new webpack.HashedModuleIdsPlugin(),
    new MiniCssExtractPlugin({
      filename: IS_DEV ? '[name].css' : '[name].[chunkhash].css',
      chunkFilename: IS_DEV ? '[name].css' : '[name].[chunkhash].css',
    }),
    new CopyWebpackPlugin([
      {
        from: paths.assets,
        ignore: !IS_DEV ? ['**/conf.dev.js', '**/conf.local.js', '**/index.html'] : [],
      },
    ]),
  ],
  resolve: {
    extensions: ['.ts', '.vue', '.js', '.mjs', '.json'],
    alias: aliases,
  },
  devtool: IS_DEV ? 'eval-cheap-module-source-map' : 'source-map',
  optimization: {
    minimize: !IS_DEV,
    minimizer: !IS_DEV
      ? [
          new TerserPlugin({
            parallel: true,
            extractComments: true,
            terserOptions: {
              compress: true,
              mangle: true,
            },
          }),
          new OptimizeCssAssetsPlugin(),
          new CompressionPlugin(),
        ]
      : [],
    splitChunks: {
      cacheGroups: {
        vendors: {
          chunks: 'all',
          name: 'vendors',
          test: /node_modules/,
          reuseExistingChunk: false,
          filename: 'vendors.[contenthash].js',
        },
      },
    },
  },
  stats: {
    all: false,
    modules: true,
    maxModules: 0,
    errors: true,
    warnings: true,
    moduleTrace: false,
    errorDetails: false,
    timings: true,
    entrypoints: false,
    assets: true,
    assetsSort: '!size',
  },
};
