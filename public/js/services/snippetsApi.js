var api = angular.module('snippetsApiFactory', []);
api.factory('snippetsApi', ['$http', function($http){

  console.log("hello");

  var baseUrl = 'http://api.nytimes.com/svc/search/v2/articlesearch.jsonp?callback=svc_search_v2_articlesearch&sort=newest';
  var myKey = '62bd71e38ae6689ade861f7d1976e48f:6:74251473';


  var snippetsInterface = [];

  snippetsInterface.getAllSnippets = function( fromDate, toDate ) {
    var url = baseUrl + '&hl=true&api-key=' + myKey;

    if (fromDate) {
      url += '&begin_date=' + fromDate;
    }

    if ( toDate ) {
      url += '&end_date=' + toDate;
    }

    return $http.jsonp( url );
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
