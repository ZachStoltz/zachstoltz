import Avatar from '../../../node_modules/material-ui/Avatar';
import helpers from '../../utils/helpers';
import SocialMedia from './socialMedia/SocialMedia.jsx';
import React, { Component } from 'react';

const jumbotron = {
  padding: '10px',
  backgroundColor: 'lightgray',
  display: 'flex',
  flex: '1',
  flexDirection: 'column',
};
export default class Jumbotron extends Component {
  constructor(props) {
    super(props);
    this.state = { imgUrl: '' };
  }
  componentDidMount() {
    helpers.getUserProfile().then(data => {
      this.setState({ imgUrl: data.data.avatar_url });
    });
  }
  render() {
    return (
      <div style={jumbotron}>
        <Avatar
          style={{ alignSelf: 'center' }}
          src={this.state.imgUrl}
          size={200}
        />
        <h1 style={{ margin: '0px', alignSelf: 'center' }}>Zachary Stoltz</h1>
        <SocialMedia />
      </div>
    );
  }
}
