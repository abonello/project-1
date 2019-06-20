var app = angular.module("app", []);

app.controller("ctrl", [
  "$scope",
  "$http",
  function($scope, $http) {
    $scope.data = [];
    $http.get("../assets/data/info.json").then(function(data) {
      $scope.data = data.data;
      // console.log(data);
      console.log($scope.data);
    });
  }
]);
