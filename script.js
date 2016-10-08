
var app = angular.module('',[]);

app.controller('searchController',function($scope, jobService){

});


app.factory('jobService', function($http, $q){
    return {
        getJobs: function(url){
        	console.log("URL: " + url);
            // var url = "https://api.usa.gov/jobs/search.json?nursing+in+Colorado";
            return $.getJSON(url,function(data){	        
            	return data;           
        	});
        }
    };
});

function parseQueryString(queryString){

	var queries = queryString.split(" ");
	var params = "";
	var queryLength = queries.length;

	if(queryLength > 1){
		for(var i=0; i < queryLength; i++){
			params += "+"+queries[i];
		}
		return params;
	}else{
		return queryString;
	}	
};


$(document).ready(function(){

});









