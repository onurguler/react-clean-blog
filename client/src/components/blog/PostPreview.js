import React from 'react';
import PropTypes from 'prop-types';

const PostPreview = ({
  blog: { name, title, comSentence, comImage, date }
}) => {
  return (
    <div className="row">
      <div className="col-lg-4 mx-auto my-auto">
        {comImage && (
          <div className="img text-center">
            <img
              className="img-thumbnail rounded"
              src={comImage}
              alt="blog image"
            />
          </div>
        )}
      </div>

      <div className="col-lg-8 col-md-10 mx-auto my-auto">
        <div className="post-preview">
          <a href="post.html">
            <h2 className="post-title">{title}</h2>
            {comSentence && <h3 className="post-subtitle">{comSentence}</h3>}
          </a>
          <p className="post-meta">
            Posted by <a href="#">{name}</a> on {date}
          </p>
        </div>
        <hr />
      </div>
    </div>
  );
};

PostPreview.propTypes = {
  blog: PropTypes.object.isRequired
};

export default PostPreview;
