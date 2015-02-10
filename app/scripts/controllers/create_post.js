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
      $scope.submitNEW = function() { // va inviato ID_POST se è one to many l'ID dell'oggetto se non devo creare un ogetto 
        if ($scope.text) {
          temp['text1']=(this.text);
          $scope.text = '';
        }
        $scope.list.push(temp);
      };
  });
