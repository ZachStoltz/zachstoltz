import React from 'react';
import ProjectContent from './ProjectContent.jsx';

class ProjectWrapper extends React.Component{
  render(){
    return(

        <div className="col s12 m6 l3">
          <a href={this.props.project.html_url} target="_blank">
            <div className="card hoverable" style={{height: '200px'}}>
              <ProjectContent {... this.props.project} />
            </div>
          </a>
        </div>

    );
  }
}
ProjectWrapper.propTypes = {
  project: React.PropTypes.object
};
export default ProjectWrapper;
