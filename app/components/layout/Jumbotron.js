import React from 'react';
import SocialMedia from './socialMedia/SocialMedia';

const jumbotron = {
  padding: '10',
  backgroundColor: 'lightgray'
};
class Jumbotron extends React.Component{
  render(){
    return (
      <div className="center-align" style={jumbotron}>
        <h1>Zachary Stoltz</h1>
        <SocialMedia />
      </div>
    );
  }
}

export default Jumbotron;
