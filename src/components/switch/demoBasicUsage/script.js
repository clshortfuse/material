angular.module('switchDemo1', ['ngMaterial'])
.controller('SwitchDemoCtrl', function($scope) {
  $scope.data = {
    cb1: true,
    cb4: true,
    cb5: false
  };

  $scope.message = 'false';

  $scope.onChange = function(cbState) {
  	$scope.message = cbState;
  };
})
.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('docs-switch-dark')
      .primaryPalette('blue')
      .accentPalette('teal')
      .dark();
});
