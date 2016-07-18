import _ from 'lodash';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React, { Component } from 'react';

export default class Lula extends Component {
  constructor(props) {
    super(props);

    this.state = { isSubmitDisabled: true };
  }
  convertImages() {
    const { uploader, download } = this.refs;

    const formData = new FormData();
    _.each(uploader.files, (file) => {
      formData.append('files', file);
    });
    axios.post('/upload', formData).then(() => {
      download.click();
    });
  }
  triggerFileUploadDialog() {
    const { uploader } = this.refs;
    uploader.click();
  }

  toggleSubmit() {
    const { uploader } = this.refs;

    if (uploader.files) {
      this.setState({
        isSubmitDisabled: false,
      });
    }
  }

  render() {
    return (
      <div style={{ margin: '.5rem' }}>
        <h1>Lularoe Image Timestamp converter!</h1>
        <RaisedButton
          label="Choose Image(s)"
          labelPosition="before"
          secondary
          onClick={() => this.triggerFileUploadDialog()}
        />
        <input
          ref="uploader"
          type="file"
          multiple
          style={{ display: 'none' }}
          onChange={() => this.toggleSubmit()}
        />
        <RaisedButton
          ref="submit"
          onClick={() => this.convertImages()}
          label="Submit"
          disabled={this.state.isSubmitDisabled}
          primary
        />
        <a
          style={{ display: 'none' }}
          ref="download"
          href="/download"
        >
          <span>Converted Images</span>
        </a>
      </div>
    );
  }
}
