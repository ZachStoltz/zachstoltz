import React from 'react';

export default class ProjectContent extends React.Component{
  render(){
    return(
      <div className="card-content">
        <span className="card-title grey-text">{this.props.name}</span>
        <div className="divider"></div>
        <p>{this.props.description}</p>
      </div>
    );
  }
}
ProjectContent.propTypes = {
  name: React.PropTypes.string,
  description: React.PropTypes.string
};
