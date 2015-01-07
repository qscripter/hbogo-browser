'use strict';

/**
 * @ngdoc filter
 * @name hbogoBrowserApp.filter:formatDate
 * @function
 * @description
 * # formatDate
 * Filter in the hbogoBrowserApp.
 */
angular.module('hbogoBrowserApp')
  .filter('formatDate', function () {
    return function (input) {
      var date = new Date(input);
      return date;
    };
  });
