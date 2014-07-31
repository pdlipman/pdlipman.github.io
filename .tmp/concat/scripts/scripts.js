'use strict';
/**
 * @ngdoc overview
 * @name pdlipmangithubioApp
 * @description
 * # pdlipmangithubioApp
 *
 * Main module of the application.
 */
angular.module('pdlipmangithubioApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch'
]).config([
  '$routeProvider',
  function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    }).when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    }).otherwise({ redirectTo: '/' });
  }
]);
'use strict';
/**
 * @ngdoc function
 * @name pdlipmangithubioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pdlipmangithubioApp
 */
angular.module('pdlipmangithubioApp').controller('MainCtrl', [
  '$scope',
  function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }
]);
'use strict';
/**
 * @ngdoc function
 * @name pdlipmangithubioApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pdlipmangithubioApp
 */
angular.module('pdlipmangithubioApp').controller('AboutCtrl', [
  '$scope',
  function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }
]);