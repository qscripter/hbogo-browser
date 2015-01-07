'use strict';

/**
 * @ngdoc function
 * @name hbogoBrowserApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hbogoBrowserApp
 */
angular.module('hbogoBrowserApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.jsonp('http://localhost:5000/catalog.json?callback=JSON_CALLBACK').
      success(function(data) {
        for (var i=0; i < data.data.length; i++) {
          data.data[i].endDate = new Date(data.data[i].endDate);
          data.data[i].startDate = new Date(data.data[i].startDate);
        }
        $scope.features = data.data;
        $scope.sort = 'title';
      });
  });
