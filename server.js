var database = "";

var express = require('express'),
	app = express(),
	port = 3000;


app.use(express.static(__dirname + '/'));

init();

app.get('/getdata', function(req, res){
	pullTalks().then(function(data){
		res.send(data);
		
	});
	res.sendFile('real_index.html');
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
			// pullTalks(db);
		} 
	});
}

function pullTalks(){
	var cursor = getDataBase().collection('talks').find({}, {_id:0});
	// var cursor = db.collection('talks').find({}, {_id:0});
	console.log("talks");

	return new Promise(function(resolve, reject){
		cursor.each(function(err,doc){
			if(!err && doc !== null){
				console.dir(doc);
				resolve(doc);
			} 
			console.log("outside if");
		});
	});
}

function getDataBase(){
	return database;
}





