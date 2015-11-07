import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './layout/Nav';
import Jumbotron from './layout/Jumbotron';
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
  constructor(props){
    super(props);
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
        <Jumbotron />
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
