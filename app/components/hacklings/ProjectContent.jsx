import React, { PropTypes } from 'react';

export const formatLanguage = (lang) => {
  if (lang === undefined || lang === null) return undefined;

  return (
    <span className={`lang lang-${lang.toLowerCase()}`}>
      {lang === 'JavaScript' ? 'JS' : lang}
    </span>
  );
};

export const ProjectContent = (props) => (
  <div className="repo--content">
    <div className="repo--content-header">
      <h2 className="heading">{props.name}</h2>
      {formatLanguage(props.language)}
    </div>
    <p>{props.description}</p>
  </div>
);

ProjectContent.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
};

export default ProjectContent;
