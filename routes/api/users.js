const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require("express-validator");

// Bringing User model
const User = require("../../models/User");

// @route   POST api/users
// @desc    Register user
// @access  Public
router.post( "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("username", "Username is required").not().isEmpty(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, username, password } = req.body;

    try {
      // See if user exists
      let user = await User.findOne({ username });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }

      user = new User({
        name,
        username,
        password,
      });

      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      }
 
      jwt.sign(payload, config.get('jwtSecret'),{
        expiresIn: 3600
      }, (err, toekn) => {
        if (err) throw err;
        res.json({token});
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
