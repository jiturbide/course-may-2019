var assert    = require("chai").should();
var pptlogic = require("../app/pptlogic");

describe("PPT tests using SHOULD interface from CHAI module: ", function() {
	before(function() { // runs before all tests in this block
		var result; });
	after(function() { // runs after all tests in this block
	});
	beforeEach(function() { // runs before each test in this block
	});
	afterEach(function() { // runs after each test in this block
	   result = null;  });

	describe("Test the getting item to play: ", function() {
			it("Check the returned value is Paper, Stone or Scissors: ", function() {
				result = pptlogic.getRandomItem();
				result.should.match(/(Scissors|Stone|Paper)/);
			});
	});

	describe("Test the evaluatePpt function: ", function() {
		it("Check winner between My Scissors vs Your Stone: ", function() {
			const myChoice = 'Scissors';
			const yourChoice = 'Stone';
			let result = pptlogic.evaluatePpt(myChoice, yourChoice);
      let msg = pptlogic.getWinnerMsg(result);
			msg.should.equal('You win!');
		});
		it("Check winner between My Scissors vs Your Paper: ", function() {
			const myChoice = 'Scissors';
			const yourChoice = 'Paper';
			let result   = pptlogic.evaluatePpt(myChoice, yourChoice);
			let msg = pptlogic.getWinnerMsg(result);
			msg.should.equal('You loose!');
		});
		it("Check winner between My Stone vs Your Scissors: ", function() {
			const myChoice = 'Stone';
			const yourChoice = 'Scissors';
			let result  = pptlogic.evaluatePpt(myChoice, yourChoice);
			let msg = pptlogic.getWinnerMsg(result);
			msg.should.equal('You loose!');
		});
		it("Check winner between My Stone vs Your Paper: ", function() {
			const myChoice = 'Stone';
			const yourChoice = 'Paper';
			let result  = pptlogic.evaluatePpt(myChoice, yourChoice);
			let msg = pptlogic.getWinnerMsg(result);
			msg.should.equal('You win!');
		});
		it("Check winner between My Paper vs Your Stone: ", function() {
			const myChoice = 'Paper';
			const yourChoice = 'Stone';
			let result  = pptlogic.evaluatePpt(myChoice, yourChoice);
			let msg = pptlogic.getWinnerMsg(result);
			msg.should.equal('You loose!');
		});
		it("Check winner between My Paper vs Your Scissors: ", function() {
			const myChoice = 'Paper';
			const yourChoice = 'Scissors';
			let result  = pptlogic.evaluatePpt(myChoice, yourChoice);
			let msg = pptlogic.getWinnerMsg(result);
			msg.should.equal('You win!');
		});
		it("Check winner between Equal Items: ", function() {
			var item = pptlogic.getRandomItem();
			result   = pptlogic.evaluatePpt(item, item);
			result.should.equal(0);
		});
		it("Check winner between Non existent Item: ", function() {
			result   = pptlogic.evaluatePpt('Piedra', 'Papel');
			let msg = pptlogic.getWinnerMsg(result);
			msg.should.equal('WTF!');

		});
	});
});
