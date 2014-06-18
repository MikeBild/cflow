(function() {
var Flow = function(){
	this.args = Array.prototype.slice.call(arguments);
	var next = function(){
		if(this.args.length>0){
			this.args.shift();
			this.args[0].apply(next, Array.prototype.slice.call(arguments));
		}
	}.bind(this);
	this.args[0].apply(next);
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
	module.exports = Flow;
 else
    window.Flow = Flow;
})();
