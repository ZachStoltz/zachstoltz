import React from 'react';
class CircleImg extends React.Component{
  render(){
    return(
      <img src={this.props.src} className="responsive-img circle" />
    );
  }
}
CircleImg.propTypes = {
  src : React.PropTypes.string.isRequired
};

export default CircleImg;
