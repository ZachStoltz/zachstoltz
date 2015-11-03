import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './layout/Nav';
import About from './About';
import ProjectWrapper from './hacklings/ProjectWrapper';

const mockData = [{
  id: 0,
  name: 'Project One',
  url: 'www.twitter.com',
  desc: 'This is a Mock Description'
},{
  id: 1,
  name: 'Project One',
  url: 'www.twitter.com',
  desc: 'This is a Mock Description'
}];
class Main extends React.Component{
  constructor(){
    super();
    this.state = {};
  }
  componentWillMount(){
    this.setState({
      projects: mockData
    });
  }
  render(){
    return(
      <div>
        <Nav />
        <About />
        <div className="row">
          {this.state.projects.map((project) => {
            return(
              <ProjectWrapper key={project.id} project={project}  />
            );
          })}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));
