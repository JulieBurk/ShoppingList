"use strict";
// requiring testing tool
var should = require("chai").should();

// require functions from program to be tested
var juliesFunction = require('./');

// performing the test on the required functions
describe("testjuliesFunction", function() {
  it("should return true if julies passed", function() {
    (juliesFunction("julie"))
    	.should.equal(true);
    (juliesFunction("bill"))
    	.should.equal(false);
  });
})

// require function from a program to be test
var getFunction = require('./');

//performing the test on the actual code in the app
describe("testGetFunction", function() {
	it("should return true of Get passed", function() {
		(getFunction("stuff"))
			.should.equal(true);
		(getFunction("morestuff"))
			.should.equal(false);
	})
});