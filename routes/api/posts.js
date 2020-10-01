const express = require("express");
const router = express.Router();

const Document = require("../../models/Article");
const { route } = require("./users");

// @route   GET api/posts
// @desc    Test route
// @access  Public
router.post(
  "/save",
    async (req,res) => {
    const data = req.body;
    const newArticle = new Document(data);

    newArticle.save((err) => {
      if(err){
        res.status(500).json({ msg: 'Sorry, internal server errors '});
        return;
      }
      return res.json({
        msg: 'Your data has been saved'
      });
    });
  }  
);

module.exports = router;
