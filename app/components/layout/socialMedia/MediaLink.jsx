import React from 'react';

const wrapperStyles = {
  display: 'inline-block',
  marginRight: '1.5rem'
};

export default class MediaLink extends React.Component{
  render(){
    return (
      <div style={wrapperStyles}>
        <a href={this.props.href} target="_blank">
          <i className={this.props.className ? 'fa fa-'+ this.props.className : ''}></i>
        </a>
      </div>
    );
  }
}
MediaLink.propTypes = {
  href: React.PropTypes.string.isRequired,
  className: React.PropTypes.string.isRequired
};
