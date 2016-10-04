var myApp= angular.module('myApp', []);

myApp.controller('registrationController', ['$scope',
  function($scope) {
    $scope.register= function() {
      $scope.message= 'Welcome' + $scope.user.firstname + $scope.user.lastname;
    }
}]);
