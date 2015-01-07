'use strict';

/**
 * @ngdoc filter
 * @name hbogoBrowserApp.filter:round
 * @function
 * @description
 * # round
 * Filter in the hbogoBrowserApp.
 */
angular.module('hbogoBrowserApp')
  .filter('round', function () {
    return function (input) {
      return Math.round(input);
    };
  });
