'use strict';

/**
 * @ngdoc overview
 * @name stationarySalmonBestSalmonApp
 * @description
 * # stationarySalmonBestSalmonApp
 *
 * Main module of the application.
 */
var app  = angular
  .module('stationarySalmonBestSalmonApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('state1');
  $stateProvider.state('state1', {
    url: '/state1',
    templateUrl: '../../404.html'
  });
});

