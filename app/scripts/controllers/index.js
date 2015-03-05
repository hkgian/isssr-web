'use strict';


angular.module('testWebsiteApp')
 .controller('NavbarController', function ($scope){


	$scope.users=[
	{nome:'Pierluigi', id:1},
	{nome:'Gianluca', id:2},
	{nome:'Gabriele', id:3},
	{nome:'Cristina', id:4},
	{nome:'Matteo', id:5}
	];

	$scope.myUser= $scope.users[1];
	console.log($scope.myUser);
});