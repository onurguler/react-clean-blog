import React from 'react';
import PropTypes from 'prop-types';

import home from '../../img/home-bg.jpg';

const PageHeader = props => {
  return (
    <header
      className="masthead"
      style={{
        backgroundImage: `url(${home})`
      }}>
      <div className="overlay" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="site-heading">
              <h1>Clean Blog</h1>
              <span className="subheading">
                A Blog Theme by Start Bootstrap
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

PageHeader.propTypes = {};

export default PageHeader;
