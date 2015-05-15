(function(){
  'use strict';
  angular.module('zsApp', ['ngRoute', 'ngMaterial', 'app.home'])


  .config(function($routeProvider, $locationProvider){
    $locationProvider.html5mode = true;

    $routeProvider.when('/',{
      templateUrl: 'src/home/home.html',
      controller: 'home'
    }).when('/about', {
      templateUrl: 'src/home/home.html'
    });
  });
})();
