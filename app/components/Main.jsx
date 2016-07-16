import About from './About.jsx';
import Hacklings from './hacklings/Hacklings.jsx';
import Jumbotron from './layout/Jumbotron.jsx';
import React from 'react';

export default () => {
  return (
    <div>
      <Jumbotron />
      <About />
      <Hacklings />
    </div>
  );
};
