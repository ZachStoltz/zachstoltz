import React from 'react';
import reactDOM from 'react-dom';

class SideNavButton extends React.Component{
  componentDidMount(){
    $(reactDOM.findDOMNode(this)).sideNav();
  }
  render(){
    return(
      <a href="#" data-activates="mobile-nav" className="button-collapse">
        <i className="material-icons">menu</i>
      </a>
    );
  }
}
export default SideNavButton;
