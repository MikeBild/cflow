if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	var chai = require("chai"),
		Flow = require("../lib/cflow");
};

describe("cflow", function () {
	it("sequential", function (done) {
		new Flow(
			function(){
				slow("A", this);
			},
			function(data){
				chai.expect(data).to.equal("A");
				slow2(data + "B", "!!!", this);
			},
			function(data, data2){
				chai.expect(data).to.equal("AB");
				slow(data + "C" + data2, this);
			},
			function(data){
				chai.expect(data).to.equal("ABC!!!");
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
	