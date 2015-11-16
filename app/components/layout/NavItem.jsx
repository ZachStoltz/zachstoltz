import React from 'react';
import ReactDOM from 'react-dom';

export default class NavItem extends React.Component{
  constructor(props){
    super(props);
    this.handleClickEvent = this.handleClickEvent.bind(this);
  }
  triggerSmoothScroll(target){
    let hash,
      $target;
    (target.hash ? hash = target.hash : undefined);

    if(!hash){
      hash = target.baseURI.substring(target.baseURI.indexOf('#'));
    }
    $target = $(hash);
    $('html,body').stop().animate({
      'scrollTop': $target.offset().top
    }, 950);
  }
  handleClickEvent(ev){
    if(!this.props.isSideNav){
      this.triggerSmoothScroll(ev.target);
      return;
    }
    $(ReactDOM.findDOMNode(this)).parent().siblings('.button-collapse').sideNav('hide');
    console.log('Event', ev);
    this.triggerSmoothScroll(ev.target);
  }
  render(){
    return(
      <li><a onClick={this.handleClickEvent} href={this.props.href}><span>{this.props.name}</span></a></li>
    );
  }
}
NavItem.propTypes = {
  href: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  isSideNav: React.PropTypes.bool.isRequired
};
