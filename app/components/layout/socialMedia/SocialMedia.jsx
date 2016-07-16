import Github from './Github.jsx';
import Linkedin from './Linkedin.jsx';
import React from 'react';
import Twitter from './Twitter.jsx';

const styles = {
  svgSize: {
    width: '54px',
    height: '54px',
  },
  mediaContainer: {
    alignSelf: 'center',
  },
};

export default () => (
  <div style={styles.mediaContainer}>
    <a href="https://github.com/zachstoltz" target="_blank">
      <Github viewBox="0 0 512 512" style={styles.svgSize} />
    </a>
    <a href="https://www.linkedin.com/in/zacharystoltz" target="_blank">
      <Linkedin viewBox="0 0 512 512" style={styles.svgSize} />
    </a>
    <a href="https://twitter.com/ZachStoltz" target="_blank">
      <Twitter viewBox="0 0 512 512" style={styles.svgSize} />
    </a>
  </div>
);
