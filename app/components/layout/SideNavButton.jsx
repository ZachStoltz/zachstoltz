import React from 'react';

class SideNavButton extends React.Component{

  render() {
    return (
      <a href="#" data-activates="mobile-nav" className="button-collapse">
        <i className="material-icons">menu</i>
      </a>
    );
  }
}
export default SideNavButton;
