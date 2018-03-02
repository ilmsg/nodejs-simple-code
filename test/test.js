const supertest = require("supertest");
const should = require("should");

const port = process.env.PORT || '4000';
const server = supertest.agent("http://localhost:" + port);

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
