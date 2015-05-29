(function(){
  'use strict';
  angular.module('zsApp', ['ngRoute', 'ngMaterial', 'app.home','app.contribution'])
  .config(function($routeProvider, $locationProvider){
    
    $routeProvider.when('/',{
      templateUrl: './home/home.html',
      controller: 'home'
    }).when('/contribution',{
      templateUrl:'./contributions/contributions.html',
      controller:'contribution'
    }).otherwise('/');
  });
})();
