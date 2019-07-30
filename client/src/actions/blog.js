import axios from 'axios';
import { GET_BLOGS, BLOG_ERROR, GET_BLOG } from './types';

// Get all blogs
export const getBlogs = () => async dispatch => {
  try {
    const res = await axios.get('/api/blogs');

    dispatch({
      type: GET_BLOGS,
      payload: res.data.blogs
    });
  } catch (err) {
    dispatch({
      type: BLOG_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get blog by ID
export const getBlogById = blogId => async dispatch => {
  try {
    const res = await axios.get(`/api/blogs/${blogId}`);

    dispatch({
      type: GET_BLOG,
      payload: res.data.blog
    });
  } catch (err) {
    dispatch({
      type: BLOG_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
