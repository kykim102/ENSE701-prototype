const express = require("express");
const router = express.Router();

const Books = require('../../models/Books');
const Proceedings = require('../../models/Proceedings');
const Article = require('../../models/Article');
const { profile_url } = require("gravatar");

// @route   GET api/Books
// @desc    Get all book details
// @access  Public
router.get('/', async (req, res) => {
    try{
        const Search = await Books.find().populate('Books', 
        ['title', 'author', 'publisher', 'year', 'month']);
        res.json(Search);
    } catch(err){
    console.error(err.message);
    res.status(500).send('Book not found');
    }
});

module.exports = router;
