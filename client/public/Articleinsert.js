//Articleinsert.js file
let mongoose = require('mongoose');

let connection = require('./db');

let ArticleSchema = new mongoose .Schema(
    {
        author: {
            type: String,
          },
          title: {
            type: String,
            required: true,
          },
          journal: {
            type: String,
          },
          year: {
            type: Date.year,
          },
          eprint: {
            type: String,
          },
          eprtinttype: {
            type: String,
          },
          eprintclass: {
            type: String
          },
          volume: {
            type: String,
          },
          number: {
            type: String,
          },
          pages: {
            type: String,
          },
          month: {
            type: Date.month,
          },
          annote: {
            type: String,
          }
    }
)

let Article = connection.model