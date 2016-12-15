import helpers from '../../utils/helpers';
import ProjectWrapper from './ProjectWrapper.jsx';
import React, { Component } from 'react';

export default class Hacklings extends Component {
  constructor(props) {
    super(props);
    this.state = { projects: [] };
  }
  componentDidMount() {
    helpers.getRepos().then(data => {
      const repos = data.data;
      console.log(repos);
      this.setState({ projects: repos });
    })
    .catch(err => this.setState({ err }));
  }

  render() {
    const { projects } = this.state;
    return (
      <div id="projects" className="hacklings">
        <h1>Hacklings</h1>
        <div className="repos">
          {projects
            ? projects.map(project => (
              <ProjectWrapper key={project.id} project={project} />
            ))
            : <div>Loading =)</div>
          }
        </div>
      </div>
    );
  }
}
