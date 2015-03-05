'use strict';

/**
 * @ngdoc function
 * @name testWebsiteApp.controller:CreatePostCtrl
 * @description
 * # CreatePostCtrl
 * Controller of the testWebsiteApp
 */
 angular.module('testWebsiteApp')
 .controller('CreatePostCtrl', function ($scope, $http, $modal, $log, growl) {
  $scope.post={};
  $scope.post.title='';
  $scope.post.tale='';
  $scope.post.videos=[];

  $http.get("http://localhost:9000/ItineraryDTO.json")
  .success(function(response) {
    $scope.itinerary=response;
  });

  $http.get("http://localhost:9000/photos.php")
  .success(function(response) {
   $scope.post.photos= response;
   $log.info('photos: '+ $scope.post.photos.toString() );
 });

  $scope.openModalTitle = function() {
    $http.post("/getlocktitle", { postId: 12, username: 'lotito'}). // da editare il lotito ovviamente....
    success(function(data, status, headers, config) {
    // this callback will be called asynchronously
    // when the response is available

    if(data == 'true'){

      var modalInstance = $modal.open({
        templateUrl: 'titleModal',
        controller: 'ModalInstanceCtrl',
        resolve: {
          modalT : function () {
            return $scope.post.title;
          }
        }
      });


      modalInstance.result.then(function (selectedItem) {

        console.log('selectedItem: '+selectedItem);
        $scope.post.title = selectedItem;
        $log.info($scope.post.title);

      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });

    }
    else{

      growl.error("somebody else is editing this!", {title: 'BUSY AT THE MOMENT'});
    }
  }).
    error(function(data, status, headers, config) {
      growl.error("seems like you are offline!", {title: 'UNABLE TO CONTACT THE SERVER'});
    });
  };



  $scope.openModalTale = function() {
    $http.post("/getlocktale", { postId: 12, username: 'lotito'}). // da editare il lotito ovviamente....
    success(function(data, status, headers, config) {
      if(data == 'true'){

        var modalInstance = $modal.open({
          templateUrl: 'taleModal',
          controller: 'ModalInstanceCtrl',
          resolve: {
            modalT : function () {
              return $scope.post.tale;
            }
          }
        });

        modalInstance.result.then(function (selectedItem) {

          console.log('selectedItem: '+selectedItem);
          $scope.post.tale = selectedItem;
          $log.info($scope.post.tale);

        }, function () {
          $log.info('Modal dismissed at: ' + new Date());
        });

      }
      else{

        growl.error("somebody else is editing this!", {title: 'BUSY AT THE MOMENT'});
      }
    }).
    error(function(data, status, headers, config) {
      growl.error("seems like you are offline!", {title: 'UNABLE TO CONTACT THE SERVER'});
    });
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
    var index= $scope.post.photos.indexOf(x)
    $scope.post.photos.splice(index,1);     
  }
  $scope.addPhoto = function(x){
    console.log(x.toString());
    $scope.post.photos.push({"Name" : "lotito", "URL" : x.toString()})
  }
  







});


angular.module('testWebsiteApp')
.controller('ModalInstanceCtrl', function ($scope, $modalInstance, modalT ) {

  $scope.a = modalT;

  $scope.ok = function () {
    $modalInstance.close($scope.a);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});