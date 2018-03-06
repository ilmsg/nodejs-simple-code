'use strict';

const supertest = require("supertest");
const should = require("should");

const port = process.env.PORT || '4000';

const app = require('../app.js');
const server = supertest(app);

describe("SAMPLE unit test", function(){
  it("should return home page",function(done){
    server
    .get("/")
    .expect("Content-type",/text/)
    .expect(200)
    .end(function(err,res){
      res.status.should.equal(200);
      done();
    });
  });
});
