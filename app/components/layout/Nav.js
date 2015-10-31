import React from 'react';
import SideNavButton from './SideNavButton';

class Nav extends React.Component{
  render(){
    return(
      <nav>
        <div className="nav-wrapper">
          <SideNavButton />
          <ul className="right hide-on-med-and-down">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
          </ul>
          <ul className="side-nav" id="mobile-nav">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Nav;
