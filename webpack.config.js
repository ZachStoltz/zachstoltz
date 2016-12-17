const path = require('path');
const webpack = require('webpack');

let plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    },
  }),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
];

let entry = ['./app/index'];


if (process.env.NODE_ENV === 'development') {
  entry = entry.concat([
    'webpack-dev-server/client?http://localhost:7000/',
    'webpack/hot/only-dev-server',
  ]);
}
if (process.env.NODE_ENV === 'production') {
  plugins = [new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    compress: { warnings: false },
  })].concat(plugins);
}

module.exports = {
  devtool: 'source-map',
  entry,
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  plugins,
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel'],
      exclude: /node_modules/,
    }],
    resolve: {
      extensions: ['', '.js', '.jsx'],
    },
    modulesDirectores: [
      'node_modules',
      'app',
    ],
  },
};
