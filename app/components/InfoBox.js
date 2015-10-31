import React from 'react';

class InfoBox extends React.Component{
  render(){
    return(
      <p className='flow-text center-align'>
        <span><i className="material-icons">stars</i></span>
          Work In Progress
        <span><i className="material-icons">stars</i></span>
      </p>
    );
  }
}
export default InfoBox;
