"use strict";
// requiring testing tool
var should = require("chai").should();

// require functions from program to be tested
var fizzBuzzChecker = require('../public/fizzBuzzChecker.js');

// performing the test on the required functions
describe("fizzBuzzChecker", function() {
  it("should return Fizz when only divisible by 3", function() {
    (fizzBuzzChecker(3))
    	.should.equal("Fizz");
    (fizzBuzzChecker(6))
    	.should.equal("Fizz");
  });

  it("should return Buzz when only divisible by 5", function() {
    (fizzBuzzChecker(5))
    	.should.equal("Buzz");
    (fizzBuzzChecker(10))
    	.should.equal("Buzz");
  });

  it("should return FizzBuzz when divisible by both", function() {
    (fizzBuzzChecker(15))
    	.should.equal("FizzBuzz");
    (fizzBuzzChecker(30))
    	.should.equal("FizzBuzz");
  });
});