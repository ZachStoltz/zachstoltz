import Nav from './layout/Nav.jsx';
import React from 'react';

export default (props) => {
  return (
    <div>
      <Nav />
      {props.children}
    </div>
  );
};
