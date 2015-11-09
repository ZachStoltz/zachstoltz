import React from 'react';

const wrapperStyles = {
  display: 'inline-block',
  marginRight: '1.5rem'
};
class MediaLink extends React.Component{
  render(){
    return (
      <div style={wrapperStyles}>
        <a href={this.props.href}>
          <i className={this.props.className ? 'scale-animation fa fa-'+ this.props.className : ''}></i>
        </a>
      </div>
    );
  }
}
MediaLink.propTypes = {
  href: React.PropTypes.string.isRequired,
  className: React.PropTypes.string.isRequired
};
export default MediaLink;
