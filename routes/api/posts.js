const express = require("express");
const router = express.Router();

const Document = require("../../models/Article");
const { route } = require("./users");
const db = require("../../config/db");

// @route   GET api/posts
// @desc    Test route
// @access  Public
// Router for data to save to the database
router.post("/save", async (req, res) => {
  const data = req.body;
  const newArticle = new Document(data);

  newArticle.save((err) => {
    if (err) {
      res.status(500).json({ msg: "Sorry, internal server errors " });
      return;
    }
    return res.json({
      msg: "Your data has been saved",
    });
  });
});


// Router to get all document from database
router.get("/get", async (req, res) => {
  try {
    console.log(req.query);
    // Find input data from database
    const article = await Document.find({title: req.query.title});
    console.log(article);
    res.json(article);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
