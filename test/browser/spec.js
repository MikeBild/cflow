var test = require('tape');

test('cflow sequential', function (t) {
	t.equal("ABC!!!", "ABC!!!");
	t.end();
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
	