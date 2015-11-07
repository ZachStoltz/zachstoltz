import React from 'react';
//import CircleImg from './CircleImg';
import InfoBox from './InfoBox';
import helpers from '../utils/helpers';
class About extends React.Component{
  componentDidMount(){
    // helpers.getRepos().then(data => {
    //   console.log(data);
    // });
  }
  render(){
    return (
      <div>
        <InfoBox />
      </div>
    );
  }
}
export default About;
// <CircleImg src="public/img/us.jpg"/>
