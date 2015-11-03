import React from 'react';
import SideNavButton from './SideNavButton';
import NavItem from './NavItem';

const LINKS = [{name: 'Home', href: '#', id: 0},
  {name: 'About', href: '#', id: 1},{name: 'Hacklings', href: '#', id: 2}];

class Nav extends React.Component{
  constructor(props){
    super(props);
    this.state = {links:LINKS};
  }
  render(){
    return(
      <nav>
        <div className="nav-wrapper">
          <SideNavButton />
          <ul className="right hide-on-med-and-down">
            {this.state.links.map(link =>{
              return (
                <NavItem key={link.id} {... link} />
              );
            })}
          </ul>
          <ul className="side-nav" id="mobile-nav">
            {this.state.links.map(link =>{
              return (
                <NavItem key={link.id} {... link} />
              );
            })}
          </ul>
        </div>
      </nav>
    );
  }
}
export default Nav;
