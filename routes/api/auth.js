const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

// Bringing User model
const User = require("../../models/User");

// @route   POST api/auth
// @desc    Authenticate user
// @access  Public
router.post( "/",
  [
    check("username", "Username is required").not().isEmpty(),
    check(
      "password",
      "Password is required"
    ).exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;

    try {
      // See if user exists
      let user = await User.findOne({ username });

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid user" }] });
      }

      var isMatch;
      if(user.password == password){
        isMatch = true;
      }else{
        isMatch = false;
      }

      res.send("User registered");

    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
