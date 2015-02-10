'use strict';

describe('Controller: CreatePostCtrl', function () {

  // load the controller's module
  beforeEach(module('testWebsiteApp'));

  var CreatePostCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreatePostCtrl = $controller('CreatePostCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
