"use strict";
// requiring testing tool
var should = require("chai").should();

// require functions from program to be tested
var juliesFunction = require('../server.js');

// performing the test on the required functions
describe("testjuliesFunction", function() {
  it("should return true if julies passed", function() {
    (juliesFunction("julie"))
    	.should.equal(true);
    (juliesFunction("bill"))
    	.should.equal(false);
  });

//   it("should return Buzz when only divisible by 5", function() {
//     (fizzBuzzChecker(5))
//     	.should.equal("Buzz");
//     (fizzBuzzChecker(10))
//     	.should.equal("Buzz");
//   });

//   it("should return FizzBuzz when divisible by both", function() {
//     (fizzBuzzChecker(15))
//     	.should.equal("FizzBuzz");
//     (fizzBuzzChecker(30))
//     	.should.equal("FizzBuzz");
//   });
});