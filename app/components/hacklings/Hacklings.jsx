import React from 'react';
import helpers from '../../utils/helpers';
import ProjectWrapper from './ProjectWrapper.jsx';

const hacklingStyle = {
  margin: '0 5em'
};
export default class Hacklings extends React.Component{
  constructor(props){
    super(props);
    this.state = {projects: ''};
  }
  componentWillMount(){
    helpers.getRepos().then(data => {
      let repos = data.data;
      this.setState({projects: repos});
    });

  }
  render(){
    if(this.state.projects) {
      return (
        <div id="projects" className="row" style={hacklingStyle}>
          <h2>Hacklings</h2>
          {this.state.projects.map((project) => {
            return(
              <ProjectWrapper key={project.id} project={project}  />
            );
          })}
        </div>
      );
    }
    return <div>Loading =)</div>

  }
}
