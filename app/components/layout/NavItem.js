import React from 'react';

class NavItem extends React.Component{
  render(){
    return(
      <li><a href={this.props.href}><span>{this.props.name}</span></a></li>
    );
  }
}
NavItem.propTypes = {
  href: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired
};
export default NavItem;
