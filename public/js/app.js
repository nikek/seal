'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('sealApp', ['sealApp.filters', 'sealApp.services', 'sealApp.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: MyCtrl1});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: MyCtrl2});
    $routeProvider.when('/feed', {templateUrl: 'partials/feedView.html', controller: Feed});
    $routeProvider.otherwise({redirectTo: '/view1'});
    $locationProvider.html5Mode(true);
  }]);