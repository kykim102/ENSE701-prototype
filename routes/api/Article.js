const express = require("express");
const router = express.Router();

const Article = require("../../models/Article");

// @route   GET api/article/get
// @desc    Test route
// @access  Public
router.get("/get", async (req, res) => {
  try {
    const article = await Article.find();
    res.json(article);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
