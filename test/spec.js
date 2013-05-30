if (typeof window === "undefined") {
	var expect = require("chai").expect,
		Flow = require("../lib/cflow");
} else if(!chai) {
	var expect = require("chai").expect;
} else {
	var expect = chai.expect;
}

describe("cflow", function () {
	it("sequential", function (done) {
		var results = [];
		new Flow(
			function(){
				slow("A", this);
			},
			function(data){
				expect(data).to.equal("A");
				slow2(data + "B", "!!!", this);
			},
			function(data, data2){
				expect(data).to.equal("AB");
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
	