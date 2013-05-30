var Flow = require("./lib/qflow");

 
new Flow(
	function(){
		slow("A", this);
		console.log("1");
	},
	function(data){
		slow2(data + "B", "!!!", this);
		console.log("2");
	},
	function(data, data2){
		slow(data + "C" + data2, this);
		console.log("3");
	},
	function(data){
		console.log("4");
		console.log(data);
	}
);
 
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