import React from 'react';
import CircleImg from '../CircleImg.jsx';
import helpers from '../../utils/helpers';
import SocialMedia from './socialMedia/SocialMedia.jsx';

const jumbotron = {
  padding: '10',
  backgroundColor: 'lightgray'
};
export default class Jumbotron extends React.Component{
  constructor(props){
    super(props);
    this.state = {imgUrl: ''};
  }
  componentDidMount(){
    helpers.getUserProfile().then(data =>{
      this.setState({imgUrl: data.data.avatar_url});
    });
  }
  render(){
    return (
      <div className="center-align" style={jumbotron}>
        <CircleImg src={this.state.imgUrl} />
        <h1 style={{marginTop: '0px'}}>Zachary Stoltz</h1>
        <SocialMedia />
      </div>
    );
  }
}
