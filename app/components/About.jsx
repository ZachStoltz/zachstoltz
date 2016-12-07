import InfoBox from './InfoBox.jsx';
import React from 'react';

const aboutStylings = {
  margin: '0 5em'
};
export default class About extends React.Component{
  render(){
    return (
      <div id="about" style={aboutStylings}>
        <h2>About</h2>
        <InfoBox />
      </div>
    );
  }
}
