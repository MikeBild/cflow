if (typeof window === "undefined")
	var mocha = require("mocha"),
		expect = require("chai").expect,
		Flow = require("../lib/cflow");
else
	var expect = chai.expect;

describe("cflow", function () {
	it("sequential", function (done) {
		var results = [];
		new Flow(
			function(){
				slow("A", this);
			},
			function(data){
				slow2(data + "B", "!!!", this);
			},
			function(data, data2){
				slow(data + "C" + data2, this);
			},
			function(data){
				expect(data).to.equal("ABC!!!");
				done();
			}
		);
	});
});

function slow(value, callback){
	setTimeout(function(){
		callback(value);
	}, 200)
}
function slow2(value, value2, callback){
	setTimeout(function(){
		callback(value, value2);
	}, 300)
}
	