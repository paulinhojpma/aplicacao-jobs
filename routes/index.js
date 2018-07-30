var express = require('express');
var router = express.Router();
var snap = require("../node_modules/my-modules/firebase-teste");
console.log("valor do snap - "+snap.consulta);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


router.get('/firebase', function(req, res, next) {
	var snapval = {};
	res.setHeader('Content-Type', 'application/json');
	snap.consulta.then(function(snapShot){
		
		console.log(snapShot.toJSON());
		//snapval = snapShot.toJSON();
		res.send(snapShot.toJSON());
	});
	
    
	
	/*console.log("get do firebase");
	var snapval = snap.consulta;
	console.log("Valor do Snap -- "+ snapval);
	console.log("Apos Snapval");
   	res.setHeader('Content-Type', 'application/json');
    res.send(snapval);
    next();*/
});
module.exports = router;
