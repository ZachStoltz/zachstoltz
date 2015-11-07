module.exports = {
  entry: './app/components/Main.js',
  output: {
    filename: 'public/app-compiled.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules |bower_components)/,
        loader: 'babel'
      }
    ]
  }
};
