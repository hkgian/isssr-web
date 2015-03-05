'use strict';

/**
 * @ngdoc function
 * @name testWebsiteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testWebsiteApp
 */
angular.module('testWebsiteApp')
  .controller('ListActivityCtrl', function ($scope, $routeParams, $log) {
  	$scope.userID = $routeParams.id;
    $log.info('questi sono i route params: ' + $scope.userID);
  });