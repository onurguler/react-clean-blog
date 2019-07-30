import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';

const PostHeader = ({ blog: { comImage, comSentence, title, name, date } }) => {
  return (
    <header
      className="masthead"
      style={comImage && { backgroundImage: `url('${comImage}')` }}>
      <div className="overlay" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="post-heading">
              <h1>{title}</h1>
              {comSentence && <h2 className="subheading">{comSentence}</h2>}
              <span className="meta">
                Posted by <Link to="#">{name}</Link> on{' '}
                {moment(date).format('MMMM DD, YYYY')} at{' '}
                {moment(date).format('h:mm:ss a')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

PostHeader.propTypes = {
  blog: PropTypes.object.isRequired
};

export default PostHeader;
