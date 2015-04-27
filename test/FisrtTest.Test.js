var expect = require("chai").expect,
    express = require('express'),
    request = require('supertest');
 
var app = require('D:/projects/project/server.js');
 
      
 
describe('GET /emplist', function(){
    it('should return 200 and JSON with valid keys', function(done){
       // request(app)
        app.get('/emplist',function(err, res)
          //.end(function(err, res){
            //validate the keys in the response JSON matches, we dont care about the values
            expect(res.status).to.equal(200);
            expect(res.body[0]).to.have.keys(['name','salary','department']);
            done();
        });
    });    
});
