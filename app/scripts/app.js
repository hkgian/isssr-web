'use strict';

/**
 * @ngdoc overview
 * @name testWebsiteApp
 * @description
 * # testWebsiteApp
 *
 * Main module of the application.
 */
angular
  .module('testWebsiteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/createpost', {
        templateUrl: 'views/createpost.html',
        controller: 'CreatePostCtrl'
      })
      .when('/list_activity', {
        templateUrl: 'views/list_activity.html',
        controller: 'ListActivityCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
