const express = require("express");
const router = express.Router();

const Document = require("../../models/Article");

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
    // Find all articles from database if there is no entry to the search
    var article = await Document.find();
    if(req.query.keyWord === ""){
      res.json(article);
    } 
    else{ 
      list = [];
      article.map((item, index) => {
        if(item.title.toLowerCase().includes(req.query.keyWord.toLowerCase())){
          list.push(item);  
        } 
        else if (item.author.toLowerCase().includes(req.query.keyWord.toLowerCase())){
          list.push(item); 
        }
        else if (item.year.toLowerCase().includes(req.query.keyWord.toLowerCase())){
          list.push(item); 
        }
        else if (item.journal.toLowerCase().includes(req.query.keyWord.toLowerCase())){
          list.push(item); 
        }
      });
      res.json(list);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Router to get document using title keyword
router.get("/get/title", async (req, res) => {
  try {
    var article = await Document.find();
    if(req.query.keyWord === ""){
      list = [];
    } else {
      list = [];
        article.map((item, index) => {
          if (item.title.toLowerCase().includes(req.query.keyWord.toLowerCase())){
            list.push(item); 
          }
        })
      }
      
      res.json(list);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Router to get document using author keyword
router.get("/get/author", async (req, res) => {
  try {
    var article = await Document.find();
    if(req.query.keyWord === ""){
      list = [];
    } else {
      list = [];
        article.map((item, index) => {
          if (item.author.toLowerCase().includes(req.query.keyWord.toLowerCase())){
            list.push(item); 
          }
        })
      }
      
      res.json(list);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Router to get document using journal keyword
router.get("/get/journal", async (req, res) => {
  try {
    var article = await Document.find();
    if(req.query.keyWord === ""){
      list = [];
    } else {
      list = [];
        article.map((item, index) => {
          if (item.journal.toLowerCase().includes(req.query.keyWord.toLowerCase())){
            list.push(item); 
          }
        })
      }
      
      res.json(list);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Router to get document using year keyword
router.get("/get/year", async (req, res) => {
  try {
    var article = await Document.find();
    if(req.query.keyWord === ""){
      list = [];
    } else {
      list = [];
        article.map((item, index) => {
          if (item.year.toLowerCase().includes(req.query.keyWord.toLowerCase())){
            list.push(item); 
          }
        })
      }
      
      res.json(list);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
