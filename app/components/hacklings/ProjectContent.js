import React from 'react';

class ProjectContent extends React.Component{
  render(){
    return(
      <div className="card-content">
        <span className="card-title grey-text">{this.props.name}</span>
        <p>{this.props.desc}</p>
      </div>
    );
  }
}
ProjectContent.propTypes = {
  name: React.PropTypes.string,
  desc: React.PropTypes.string
};
export default ProjectContent;
