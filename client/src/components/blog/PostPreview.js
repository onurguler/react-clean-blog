import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';

const PostPreview = ({
  blog: { _id, name, title, comSentence, comImage, date }
}) => (
  <div className="row">
    <div className="col-lg-4 mx-auto my-auto">
      {comImage && (
        <Link to={`/blogs/${_id}`}>
          <div className="img text-center">
            <img
              className="img-thumbnail rounded"
              src={comImage}
              alt="blog image"
            />
          </div>
        </Link>
      )}
    </div>

    <div className="col-lg-8 col-md-10 mx-auto my-auto">
      <div className="post-preview">
        <Link to={`/blogs/${_id}`}>
          <h2 className="post-title">{title}</h2>
          {comSentence && <h3 className="post-subtitle">{comSentence}</h3>}
        </Link>
        <p className="post-meta">
          Posted by <a href="#">{name}</a> on{' '}
          {moment(date).format('MMMM DD, YYYY')} at{' '}
          {moment(date).format('h:mm:ss a')}
        </p>
      </div>
      <hr />
    </div>
  </div>
);

PostPreview.propTypes = {
  blog: PropTypes.object.isRequired
};

export default PostPreview;
