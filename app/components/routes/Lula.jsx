import _ from 'lodash';
import axios from 'axios';
import React, { Component } from 'react';

export default class Lula extends Component {
  convertImages() {
    const inputElement = document.getElementById('uploader');
    const formData = new FormData();
    _.each(inputElement.files, (file) => {
      formData.append('files', file);
    });
    axios.post('/upload', formData).then(() => {
      setTimeout(() => {
        axios.get('/download').then(data => {
          window.open(window.location + '/download');
        });
      }, 300);
    });
  }
  render() {
    return (
      <div>
        <h1>Lularoe Image Timestamp converter</h1>
        <input id="uploader" type="file" multiple />
        <button onClick={() => this.convertImages()}>
          <span> Update </span>
        </button>
      </div>
    );
  }
}
