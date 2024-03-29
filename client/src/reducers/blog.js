import { GET_BLOGS, BLOG_ERROR, GET_BLOG } from '../actions/types';

const initialState = {
  blog: null,
  blogs: [],
  loading: true,
  errors: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_BLOGS:
      return {
        ...state,
        blogs: payload,
        loading: false
      };
    case GET_BLOG:
      return {
        ...state,
        blog: payload,
        loading: false
      };
    case BLOG_ERROR:
      return {
        ...state,
        errors: payload,
        loading: false
      };
    default:
      return state;
  }
}
