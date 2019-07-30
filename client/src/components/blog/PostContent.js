import React from 'react';
import PropTypes from 'prop-types';

const PostContent = ({ blog: { text } }) => {
  return (
    <article>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">{text}</div>
        </div>
      </div>
    </article>
  );
};

PostContent.propTypes = {
  blog: PropTypes.object.isRequired
};

export default PostContent;
