import Avatar from 'material-ui/Avatar';
import helpers from '../../utils/helpers';
import SocialMedia from './socialMedia/SocialMedia.jsx';
import React, { Component } from 'react';

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
      <div className="jumbotron">
        <Avatar
          style={{ alignSelf: 'center' }}
          src={this.state.imgUrl}
          size={200}
        />
        <h1 className="jumbotron--headline"><span className="blue">Zachary</span>Stoltz</h1>
        <SocialMedia />
      </div>
    );
  }
}
