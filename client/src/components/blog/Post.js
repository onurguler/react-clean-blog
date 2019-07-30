import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import { connect } from 'react-redux';
import { getBlogById } from '../../actions/blog';

const Post = ({ getBlogById, match, blog: { blog, loading } }) => {
  useEffect(() => {
    getBlogById(match.params.id);
  }, [getBlogById, match.params.id]);

  return (
    <Fragment>
      {blog && (
        <Fragment>
          <PostHeader blog={blog} />
          <PostContent blog={blog} />
        </Fragment>
      )}
    </Fragment>
  );
};

Post.propTypes = {
  getBlogById: PropTypes.func.isRequired,
  blog: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  blog: state.blog
});
export default connect(
  mapStateToProps,
  { getBlogById }
)(Post);
