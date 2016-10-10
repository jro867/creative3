var database = "";

var express = require('express'),
	app = express(),
	port = 3000;


app.use(express.static(__dirname + '/'));

init();

app.get('/', function(req, res){

	pullTalks().then(function(data){
		res.send(data);
	});

});

app.listen(port, function() {
	console.log('Listening on port ' + port);
});



function init(){

	var mongoClient = require('mongodb').MongoClient;
	var prefix = 'mongodb://';
	var db = 'main';
	var url = prefix + 'localhost:27017' + '/' + db;

	mongoClient.connect(url, function(err,db){
		if(err){
			throw "Unable to connect to the server. Error: " + err;

		}else{
			console.log("connected");
			database = db;
			pullTalks(db);
		} 
	});
}

function pullTalks(db){
	console.log("pulltalks.....");
	// var cursor = getDataBase().collection('talks').find({}, {_id:0});
	var cursor = db.collection('talks').find({}, {_id:0});

	return new Promise(function(resolve, reject){
		cursor.each(function(err,doc){
			if(!err && doc !== null){
				console.dir(doc);
				resolve(doc);
			} 

		});
	});
}

function getDataBase(){
	return database;
}





