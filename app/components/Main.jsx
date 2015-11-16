import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './layout/Nav.jsx';
import Jumbotron from './layout/Jumbotron.jsx';
import About from './About.jsx';
import Hacklings from './hacklings/Hacklings.jsx';

class Main extends React.Component{
  render(){
    return(
      <div>
        <Nav />
        <Jumbotron />
        <About />
        <Hacklings />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));
