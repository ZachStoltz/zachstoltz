import React from 'react';

export default class CircleImg extends React.Component{
  render(){
    return(
      <img style={{width:'18rem'}} src={this.props.src} className="circle" alt="my image" />
    );
  }
}
CircleImg.propTypes = {
  src : React.PropTypes.string
};
