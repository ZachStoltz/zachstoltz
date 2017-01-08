import Github from './Github.jsx';
import Linkedin from './Linkedin.jsx';
import React from 'react';
import Twitter from './Twitter.jsx';

const styles = {
  svg: {
    width: '54px',
    height: '54px',
    color: 'white',
  },
  mediaContainer: {
    alignSelf: 'center',
  },
};

export default (props) => (
  <div style={styles.mediaContainer}>
    <a href="https://github.com/zachstoltz" target="_blank" className={props.className}>
      <Github viewBox="0 0 512 512" style={styles.svg} />
    </a>
    <a href="https://www.linkedin.com/in/zacharystoltz" target="_blank" className={props.className}>
      <Linkedin viewBox="0 0 512 512" style={styles.svg} />
    </a>
    <a href="https://twitter.com/ZachStoltz" target="_blank" className={props.className}>
      <Twitter viewBox="0 0 512 512" style={styles.svg} />
    </a>
  </div>
);
