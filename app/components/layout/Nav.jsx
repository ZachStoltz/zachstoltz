import React from 'react';
import SideNavButton from './SideNavButton.jsx';
import NavItem from './NavItem.jsx';

const LINKS = [
  {name: 'About', href: '#about', id: 1},
  {name: 'Hacklings', href: '#projects', id: 2}
];

export default class Nav extends React.Component{
  constructor(props){
    super(props);
    this.state = {links:LINKS};
  }
  render(){
    return(
      <nav>
        <div className="nav-wrapper blue">
          <SideNavButton />
          <ul className="right hide-on-med-and-down">
            {this.state.links.map(link =>{
              return (
                <NavItem isSideNav={false} key={link.id} {... link} />
              );
            })}
          </ul>
          <ul className="side-nav" id="mobile-nav">
            {this.state.links.map(link =>{
              return (
                <NavItem isSideNav={true} key={link.id} {... link} />
              );
            })}
          </ul>
        </div>
      </nav>
    );
  }
}
