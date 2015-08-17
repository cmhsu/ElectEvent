'use strict';

/**
 * @ngdoc overview
 * @name app
 * @description
 * # stationarySalmonBestSalmonApp
 *
 * Main module of the application.
 */

var app  = angular
  .module('stationarySalmonBestSalmonApp', ['ui.router', 'ngCookies']);

app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', 
  function($stateProvider, $urlRouterProvider, $httpProvider) {
  
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '../views/eventFeed.html',
      controller: 'eventFeedCtrl'
    })
    .state('myGroups', {
      url: '/group',
      templateUrl: '../views/myGroups.html',
      controller: 'myGroupsCtrl'
    })
    .state('group', {
      url: '/group/:id',
      templateUrl: '../views/group.html',
      controller: 'groupCtrl'
    })
    .state('groupForm', {
      url: '/createGroup',
      templateUrl: '../views/groupForm.html',
      controller: 'groupFormCtrl'
    })
    .state('event', {
      url: '/event/:id',
      templateUrl: '../views/event.html',
      controller: 'EventController'
    })
    .state('user', {
      url: '/user/:id',
      templateUrl: '../views/user.html',
      controller: 'userCtrl'
    })
    .state('login', {
      url: '/login',
      templateUrl: '../views/login.html',
      controller: 'loginCtrl'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: '../views/signup.html',
      controller: 'FormCtrl'
    })
    .state('createEvent', {
      url: '/createEvent',
      templateUrl: '../views/createEvent.html',
      controller: 'EventFormCtrl'
    })
    .state('logout', {
      url: '/login',
      templateUrl: '../views/login.html',
      controller: 'LogoutCtrl'
    });

    // Send token with each HTTP request to server
    $httpProvider.interceptors.push(['$q', '$location', '$cookies', 
      function($q, $location, $cookies) {
      return {
        request: function (config) {
          config.headers = config.headers || {};
          if ($cookies.get('token')) {
            config.headers.Authorization = 'Bearer ' + $cookies.get('token');
          }
          return config;
        },
        responseError: function(response) {
          if(response.status === 401 || response.status === 403) {
            console.log('Unauthorized');
            $location.path('/login');
          }
          return $q.reject(response);
        }
      };
  }]);
}]);
