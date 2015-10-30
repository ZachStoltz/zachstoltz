module.exports = {
  entry: './app/components/Main.js',
  output: {
    filename: 'public/app-compiled.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules |bower_components)/,
        loader: 'babel'
      }
    ]
  }
};
