const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const auth = require('../../middleware/auth');
const User = require('../../models/User');
const Blog = require('../../models/Blog');

// @route   POST api/blogs
// @desc    Create a blog
// @access  Private
router.post(
  '/',
  [
    auth,
    [
      check('title', 'Title is required.').exists(),
      check('text', 'Text is required.').exists()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const { title, comSentence, comImage, text } = req.body;

    try {
      const user = await User.findById(req.user.id).select('-password');

      const blog = new Blog({
        user: req.user.id,
        name: user.name,
        title,
        comSentence,
        comImage,
        text
      });

      await blog.save();

      return res.status(200).json({ blog });
    } catch (err) {
      console.error(err.message);

      return res.status(500).json({ errors: [{ msg: 'Server Error' }] });
    }
  }
);

// @route   GET api/blogs
// @desc    Get all blogs
// @access  Public
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ date: -1 });

    if (!blogs) {
      return res.status(400).json({ errors: [{ msg: 'No blogs found.' }] });
    }

    return res.status(200).json({ blogs });
  } catch (err) {
    console.error(err.message);

    return res.status(500).json({ errors: [{ msg: 'Server Error' }] });
  }
});

// @route   GET api/blogs/:blogId
// @desc    Get blog by ID
// @access  Public
router.get('/:blogId', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.blogId);

    if (!blog) {
      return res.status(404).json({ errors: [{ msg: 'Blog not found.' }] });
    }

    return res.status(200).json({ blog });
  } catch (err) {
    console.error(err.message);

    if (err.kind === 'ObjectId') {
      return res.status(404).json({ errors: [{ msg: 'Blog not found.' }] });
    }

    return res.status(500).json({ errors: [{ msg: 'Server Error' }] });
  }
});

// @route   DELETE api/blogs/:blogId
// @desc    Delete a blog by ID
// @access  Private
router.delete('/:blogId', auth, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.blogId);

    if (!blog) {
      return res.status(404).json({ errors: [{ msg: 'Blog not found.' }] });
    }

    await blog.remove();

    return res.status(200).json({ msg: 'Blog removed.' });
  } catch (err) {
    console.error(err.message);

    if (err.kind === 'ObjectId') {
      return res.status(404).json({ errors: [{ msg: 'Blog not found.' }] });
    }

    return res.status(500).json({ errors: [{ msg: 'Server Error' }] });
  }
});

module.exports = router;
