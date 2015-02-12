'use strict';

/**
 * @ngdoc function
 * @name testWebsiteApp.controller:CreatePostCtrl
 * @description
 * # CreatePostCtrl
 * Controller of the testWebsiteApp
 */
angular.module('testWebsiteApp')
  .controller('CreatePostCtrl', function ($scope) {
   	$scope.list = [];
      var temp = {};
      $scope.text = 'hello';
      $scope.submitNEW = function(stri) { // va inviato ID_POST se è one to many l'ID dell'oggetto se non devo creare un ogetto 
        console.log(stri)
        if ($scope.text) {
          temp[stri]=(this.text);
          $scope.text = '';
        }
        $scope.list.push(temp);
      };
  });
