var test = require('tape'),
	Flow = require("../../lib/cflow");

test('cflow sequential', function (t) {
	new Flow(
		function(){
			slow("A", this);
		},
		function(data){
			t.equal(data, "A");
			slow2(data + "B", "!!!", this);
		},
		function(data, data2){
			t.equal(data, "AB");
			slow(data + "C" + data2, this);
		},
		function(data){
			t.equal(data, "ABC!!!");
			t.end();
		}
	);
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
	