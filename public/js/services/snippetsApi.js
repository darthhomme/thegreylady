var api = angular.module('snippetsApiFactory', []);
api.factory('snippetsApi', ['$http', function($http){

  console.log("hello");

  // api.nytimes.com/svc/search/v2/articlesearch.jsonp?callback=svc_search_v2_articlesearch&begin_date=20160201&end_date=20160202&hl=true&api-key=62bd71e38ae6689ade861f7d1976e48f%3A6%3A74251473

  var baseUrl = 'http://api.nytimes.com/svc/search/v2/articlesearch.jsonp?callback=svc_search_v2_articlesearch';
  var myKey = '62bd71e38ae6689ade861f7d1976e48f:6:74251473'


  var snippetsInterface = [];

  snippetsInterface.getAllSnippets = function( fromDate, toDate ) {
    return $http.jsonp( baseUrl + '&begin_date=' + fromDate + '&end_date=' + toDate + '&hl=true&api-key=' + myKey);
    var superKey = baseUrl + '&begin_date=' + fromDate + '&end_date=' + toDate + '&hl=true&api-key=' + myKey;
  };

  snippetsInterface.showSnippet = function() {

    return $http.post( superKey ).post(function(data){
      $scope.snippets = data;
    });
  };


  snippetsInterface.throwSnippet = function( id ) {


    return $http.delete( superKey + id );
  }

  return snippetsInterface;

}]);
