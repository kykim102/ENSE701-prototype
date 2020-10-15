const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const chai = require('chai');
const expect = chai.expect;

// Create a new schema that accepts a 'title' object.
// 'title' is a required field
const testSchema = new Schema({
  title: { type: String, required: true }
});
//Create a new collection called 'Name'
const Title = mongoose.model('title', testSchema);
describe('Database Tests', function() {
  //Before starting the test, create a sandboxed database connection
  //Once a connection is established invoke done()
  before(function (done) {
    mongoose.connect('mongodb+srv://kyu123:kyu123@devconnector.opgxc.mongodb.net/DevConnector?retryWrites=true&w=majority');
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error'));
    db.once('open', function() {
      console.log('We are connected to test database!');
      done();
    });
  });
  describe('Test Database', function() {
    //Save object with 'title' value of 'aut"
    it('New title saved to test database', function(done) {
      var testTitle = Title({
        title: 'aut'
      });
 
      testTitle.save(done);
    });
    // it('Dont save incorrect format to database', function(done) {
    //   //Attempt to save with wrong info. An error should trigger
    //   var wrongSave = Title({
    //     title: 'Not aut'
    //   });
    //   wrongSave.save(err => {
    //     if(err) { return done(); }
    //     throw new Error('Should generate error!');
    //   });
    // });
    it('Should retrieve data from test database', function(done) {
      //Look up the 'aut' object previously saved.
      Title.find({title: 'aut'}, (err, title) => {
        if(err) {throw err;}
        if(title.length === 0) {throw new Error('No data!');}
        done();
      });
    });
  });
  //After all tests are finished drop database and close connection
  after(function(done){
    mongoose.connection.db.dropDatabase(function(){
      mongoose.connection.close(done);
    });
  });
});