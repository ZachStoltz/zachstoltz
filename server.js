const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const app = express();
app.use(serveStatic(path.join(__dirname, '/')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.PORT || 7001, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Express App listening @ port ${process.env.PORT || 7001}`);
});

if (process.env.NODE_ENV !== 'production') {
  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    proxy: {
      '*': 'http://localhost:7001',
    },
  }).listen(7000, 'localhost', (err) => {
    if (err) {
      console.log(err);
    }

    console.log('Webpack Dev Server listening @ port 7000');
  });
}
