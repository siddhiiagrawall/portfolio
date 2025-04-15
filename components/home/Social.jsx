// eslint-disable-next-line no-unused-vars
import React from 'react';

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://leetcode.com/u/agrawalriddhisiddhi8/"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LeetCode"
      >
        <i className="uil uil-code-branch"></i> {/* closest LeetCode-style icon */}
      </a>

      <a
        href="https://www.linkedin.com/in/siddhi-agrawal-831328237"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <i className="uil uil-linkedin"></i>
      </a>

      <a
        href="https://github.com/siddhiiagrawall"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
