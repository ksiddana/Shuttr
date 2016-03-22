describe('Shuttr', function() {
  beforeEach(module('explorer'));

   var $controller, user, $scope, $http, $location, $q, deferred, $httpBackend, createController;

  beforeEach(inject(function(_$controller_, _$rootScope_, _$q_, _$location_) {
    $controller = _$controller_;
    $scope = _$rootScope_;
  }));

  // Search CONTROLLER
  describe('SearchController', function() {

    var createController = function() {
      return $controller('SearchController', { $scope: $scope });
    };
    
    it('should have text SF', function() {
      var controller = createController();
      expect($scope.location.text).toEqual('San Francisco');
    });
  });
});