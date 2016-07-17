const express = require('express');
const formidable = require('express-formidable');
const path = require('path');
const serveStatic = require('serve-static');
const rimraf = require('rimraf');
const fs = require('fs');
const _ = require('lodash');
const EasyZip = require('easy-zip2').EasyZip;

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const app = express();
app.use(formidable.parse());
app.use(serveStatic(path.join(__dirname, '/')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.PORT || 7001, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Express App listening @ port 7001');
});

app.post('/upload', (req, res) => {
  const files = req.body.files;
  fs.mkdir(path.join(__dirname, 'uploads'), (err) => { if (err) console.log(err); });
  _.each(files, (file) => {
    const buffer = fs.readFileSync(file.path);
    const newPath = path.join(__dirname, `/uploads/${file.name}`);
    fs.writeFile(newPath, buffer, (err) => {
      if (err) console.log(err);
    });
    return res.status(200);
  });

  const zip = new EasyZip();
  zip.zipFolder('./uploads', () => {
    zip.writeToFile('uploads.zip');
  });

  res.status(200).send('Success');
});

app.get('/download', (req, res) => {
  rimraf(path.join(__dirname, 'uploads'), (er) => {
    if (er) throw er;
  });
  res.download(path.join(__dirname, 'uploads.zip'));
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
