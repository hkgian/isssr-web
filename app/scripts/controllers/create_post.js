'use strict';

/**
 * @ngdoc function
 * @name testWebsiteApp.controller:CreatePostCtrl
 * @description
 * # CreatePostCtrl
 * Controller of the testWebsiteApp
 */
 angular.module('testWebsiteApp')
 .controller('CreatePostCtrl', function ($scope, $http, $modal, $log) {




  $http.get("http://localhost:9000/ItineraryDTO.json")
  .success(function(response) {
    console.log(response.path);
  });

  $http.get("http://localhost:9000/photos.php")
  .success(function(response) {$scope.photos = response;});

  $scope.title = "";
  $scope.title2 = "";

   // tasto edit deve chiedere il lock
   // se ottieni il lock ti si apre il modal
   //quando clicco save devo mandare una post a /edittitle che ha come body:
   //postId (Long), title (String), username (String).
   $scope.openModalTitle = function() {
    $log.info('minchione');
    $http.post("/getlocktitle", { postId: 12, username: 'lotito'}).
    success(function(data, status, headers, config) {
    // this callback will be called asynchronously
    // when the response is available

      if(data == 'true'){

        var modalInstance = $modal.open({
          templateUrl: 'titleModal',
          controller: 'ModalInstanceCtrl'
        });


        modalInstance.result.then(function (selectedItem) {
          console.log(selectedItem);
          $scope.title = selectedItem;

        }, function () {
          $log.info('Modal dismissed at: ' + new Date());
        });
    
      }
      else{

        // fai apparire una notifica
      }
}).
    error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });



    var modalInstance = $modal.open({
      templateUrl: 'titleModal',
      controller: 'ModalInstanceCtrl'
    });


    modalInstance.result.then(function (selectedItem) {
      console.log(selectedItem);
      $scope.title = selectedItem;

    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });

    //$scope.title = $scope.title2;
  };





  $scope.postTitle = function() {
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


angular.module('testWebsiteApp')
.controller('ModalInstanceCtrl', function ($scope, $modalInstance ) {

  $scope.ok = function () {
    $modalInstance.close($scope.title2);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});