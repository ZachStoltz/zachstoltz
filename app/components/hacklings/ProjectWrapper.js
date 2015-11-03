import React from 'react';
import ProjectContent from './ProjectContent';

class ProjectWrapper extends React.Component{
  render(){
    return(

        <div className="col s12 m6 l3">
          <div className="card hoverable">
            <ProjectContent {... this.props.project} />
          </div>
        </div>

    );
  }
}
ProjectWrapper.propTypes = {
  project: React.PropTypes.object
};
export default ProjectWrapper;
