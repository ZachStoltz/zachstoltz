import React from 'react';
import MediaLink from './MediaLink.jsx';

const socialLinks = [
  {name: 'GitHub', href: 'https://github.com/zachstoltz',className:'github'},
  {name: 'twitter', href: 'https://twitter.com/ZachStoltz', className: 'twitter'},
  {name: 'linkedin', href: 'https://www.linkedin.com/in/zacharystoltz', className: 'linkedin'}
];


export default class SocialMedia extends React.Component{
  constructor(props){
    super(props);
    this.state = {socialLinks: socialLinks};
  }
  render(){
    return(
      <div>
        {
          this.state.socialLinks.map((link, idx) => {
            return(
              <MediaLink key={idx} {...link} />
            );
          })
        }
      </div>
    );
  }
}
SocialMedia.propTypes = {
  socialLinks : React.PropTypes.array
};
