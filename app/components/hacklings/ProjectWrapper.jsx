import Paper from 'material-ui/Paper';
import ProjectContent from './ProjectContent.jsx';
import React, { PropTypes } from 'react';

export const ProjectWrapper = (props) => {
  const { project = {} } = props;
  return (
    <Paper
      zDepth={4}
      className="repo--container"
      rounded
    >
      <a
        className="repo--link"
        href={project.html_url}
        target="_blank"
      >
        <ProjectContent {...project} />
      </a>
    </Paper>
  );
};

ProjectWrapper.propTypes = {
  project: PropTypes.object,
};

export default ProjectWrapper;
