var database = "";
init();

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
			dataBase = db;
			pullTalks();
		} 
	});
}

function pullTalks(){

	var cursor = getDataBase().collection('talks').find({}, {_id:0});
	cursor.each(function(err,doc){
		if(!err && doc !== null){
			console.dir(doc);
			if(smtpPatterns.get(doc.Solution) == undefined){
				smtpPatterns.set(doc.Solution, []);
			}
			smtpPatterns.get(doc.Solution).push(doc.RegEx); 
		} 

	});
}

function getDataBase(){
	return database;
}

// angular.module('News', ['ui.router'])
// .controller('MainCtrl', [
//   '$scope',
//   'postFactory',
//   function($scope, postFactory){
//     $scope.posts = postFactory.posts;
// //      $scope.addPost = function() {
// //       $scope.posts.push({title:$scope.formContent,upvotes:0});
// //       $scope.formContent='';
// //     };
//     $scope.addPost = function(){
//     if($scope.formContent === '') { return; }
//     $scope.posts.push({
//       title: $scope.formContent,
//       upvotes: 0,
//       comments: []
//     });
//     $scope.title = '';
//   };
//      $scope.incrementUpvotes = function(post) {
//       post.upvotes += 1;
//     };
//   }
// ])


// .controller('PostCtrl', [
//   '$scope',
//   '$stateParams',
//   'postFactory', 
//   function($scope, $stateParams, postFactory){
//     $scope.post = postFactory.posts[$stateParams.id];
//     $scope.addComment = function(){
//       if($scope.body === '') { return; }
//       $scope.post.comments.push({
//         body: $scope.body,
//         upvotes: 0
//       });
//       $scope.body = '';
//     };
//   $scope.incrementUpvotes = function(comment){
//     comment.upvotes += 1; 
//   };
// }])

// .factory('postFactory', [function(){
//   var o = {
//     posts: []
//   };
//   return o;
// }])

// .config([
//   '$stateProvider',
//   '$urlRouterProvider',
//   function($stateProvider, $urlRouterProvider) {
//     $stateProvider
//       .state('home', {
//         url: '/home',
//         templateUrl: '/home.html',
//         controller: 'MainCtrl'
//       })
//     .state('posts', {
//         url: '/posts/{id}',
//         templateUrl: '/posts.html',
//         controller: 'PostCtrl'
//       });
//     $urlRouterProvider.otherwise('home');
// }])

$(document).ready(function(){

});









