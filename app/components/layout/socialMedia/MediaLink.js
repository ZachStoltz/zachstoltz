import React from 'react';

const wrapperStyles = {
  display: 'inline-block',
  marginRight: '10'
};
class MediaLink extends React.Component{
  render(){
    return (
      <div style={wrapperStyles}>
        <a href={this.props.href}>
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
export default MediaLink;
