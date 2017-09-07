
var a = function(req,res){
	console.log('en la ruta de pi ps');
	res.status(200).json({
		a : 1,
		b : 2
	});
}

module.exports = a;
