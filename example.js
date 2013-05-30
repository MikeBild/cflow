var Flow = require("./lib/cflow");

new Flow(
	function(){
		log("1");
		slow("A", this);
	},
	function(data){
		log("2");
		slow2(data + "B", "!!!", this);
	},
	function(data, data2){
		log("3");
		slow(data + "C" + data2, this);
	},
	function(data){
		log(data);
	}
);

function log(value){
	console.log(value);
	if(typeof document !== 'undefined') document.write("<h1>" + value + "</h1>");
}

function slow(value, callback){
	setTimeout(function(){
		callback(value);
	}, 500)
}
function slow2(value, value2, callback){
	setTimeout(function(){
		callback(value, value2);
	}, 1000)
}