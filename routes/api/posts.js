const express = require("express");
const router = express.Router();
const { check, validationResult} = require("express-validator");

const Document = require("../../models/Article");

// @route   GET api/posts
// @desc    Test route
// @access  Public
router.post(
  "/save",
  [
    check("title", "Title is required").not().isEmpty(),
    check("author", "Author is required").not().isEmpty(),
  ],
  async (req,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { author, title, journal, year} = req.body;

    try{
      document = new Document({
        author,
        title,
        journal,
        year,
      });
  
      res.send("User registered");
  
      res.send("User route");
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
