'use strict';

/**
 * @ngdoc function
 * @name testWebsiteApp.controller:CreatePostCtrl
 * @description
 * # CreatePostCtrl
 * Controller of the testWebsiteApp
 */
 angular.module('testWebsiteApp')
 .controller('CreatePostCtrl', function ($scope, $http) {

   $http.get("http://localhost:9000/photos.php")
   .success(function(response) {$scope.photos = response;});

   $scope.title = "";
   $scope.title2 = "";
    $scope.copyFrom1 = function() { // va inviato ID_POST se è one to many l'ID dell'oggetto se non devo creare un ogetto 
    $scope.title = $scope.title2;
  };
  $scope.copyTo1 = function() {
    $scope.title2 = $scope.title;
  };
  $scope.tale = "";
  $scope.tale2 = "";
  $scope.copyFrom2 = function() {
    $scope.tale = $scope.tale2;
  };
  $scope.copyTo2 = function() {
    $scope.tale2 = $scope.tale;
  };

  $scope.deletePhoto = function(x){
    console.log(x);
    var index= $scope.photos.indexOf(x)
      $scope.photos.splice(index,1);     
  }
$scope.addPhoto = function(x){
    console.log(x.toString());
    $scope.photos.push({"Name" : "lotito", "URL" : x.toString()})
  }


});
