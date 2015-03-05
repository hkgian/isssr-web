'use strict';

/**
 * @ngdoc overview
 * @name testWebsiteApp
 * @description
 * # testWebsiteApp
 *
 * Main module of the application.
 */
angular.module('testWebsiteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'angular-growl'
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
      .when('/list_activity', {
        templateUrl: 'views/list_activity.html',
        controller: 'ListActivityCtrl'
      })
      .when('/prova', {
        templateUrl: 'views/prova.html',
        controller: 'ProvaCtrl'
      })
      .when('/create_post', {
        templateUrl: 'views/create_post.html',
        controller: 'CreatePostCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
