if (typeof window === "undefined")
	var Flow = require("../lib/cflow"),
		assert = require("assert");

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
				assert.equal(data, "ABC!!!")
				done();
			}
		);
	});
});

function slow(value, callback){
	setTimeout(function(){
		callback(value);
	}, 1000)
}
function slow2(value, value2, callback){
	setTimeout(function(){
		callback(value, value2);
	}, 500)
}
	