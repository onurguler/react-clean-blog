import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import PageHeader from '../layout/PageHeader';
import PostPreview from '../blog/PostPreview';
import { connect } from 'react-redux';
import { getBlogs } from '../../actions/blog';

const Home = ({ getBlogs, blog: { blogs, loading } }) => {
  useEffect(() => {
    getBlogs();
  }, [getBlogs]);

  return (
    <Fragment>
      <PageHeader />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            {blogs.length > 0 ? (
              blogs.map(blog => <PostPreview key={blog._id} blog={blog} />)
            ) : (
              <h4>No Blogs Found asdasd</h4>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Home.propTypes = {
  getBlogs: PropTypes.func.isRequired,
  blog: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  blog: state.blog
});

export default connect(
  mapStateToProps,
  { getBlogs }
)(Home);
