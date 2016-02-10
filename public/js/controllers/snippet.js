Date.prototype.dateToYMD = function() {
    var d = this.getDate();
    var m = this.getMonth() + 1;
    var y = this.getFullYear();
    return  y + (m<=9 ? '0' + m : m) +  (d <= 9 ? '0' + d : d);
}

var ctrl = angular.module('snippetsController', ['snippetsApiFactory']);
ctrl.controller('snippetsController', ['$scope', 'snippetsApi', '$http', '$window', function($scope, snippetsApi, $http, $window){

  $window.svc_search_v2_articlesearch = function(apiResponse) {
    var docs = apiResponse.response.docs;
    $scope.docs = docs;
  };

  $scope.docs = [];

$scope.getNews = function() {

    var fromDate = $scope.dateFrom.dateToYMD();
    var toDate = $scope.dateTo.dateToYMD();
    debugger
    snippetsApi.getAllSnippets( fromDate, toDate ).then(function( data ){
      console.log(data);
    });

  }

  function renderSnippet(){
    $http.get(superKey).then(function(response){
      var data = response.data;
      $scope.docs = data;
      console.log(response);
    })
  };

  function deleteSnippet(){
    $http.delete()
  }

}]);
