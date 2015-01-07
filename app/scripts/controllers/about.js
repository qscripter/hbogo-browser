'use strict';

/**
 * @ngdoc function
 * @name hbogoBrowserApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hbogoBrowserApp
 */
angular.module('hbogoBrowserApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
