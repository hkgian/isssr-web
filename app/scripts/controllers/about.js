'use strict';

/**
 * @ngdoc function
 * @name testWebsiteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testWebsiteApp
 */
angular.module('testWebsiteApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
