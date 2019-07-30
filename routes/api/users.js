const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');

// @route   POST api/users
// @desc    Register User
// @access  Public
router.post(
  '/',
  [
    check('name', 'Name is required.').exists(),
    check(
      'email',
      'Email is not valid. Please include a valid email.'
    ).isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters.'
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      if (await User.findOne({ email })) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists.' }] });
      }

      const avatar = await gravatar.url(email, { s: '200', r: 'pg', d: 'mm' });

      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);

      const user = new User({ name, email, password: hash, avatar });

      // @TODO if db not have a user, make first user admin

      await user.save();

      return res.status(200).json({ msg: 'Register Success.' });
    } catch (err) {
      console.error(err);

      return res.status(500).json({ errors: [{ msg: 'Server Error' }] });
    }
  }
);

module.exports = router;
