/// <reference path="../../typings/angularjs/angular.d.ts"/>

(function () {
  'use strict';

  angular.module('app.contribution', []).controller('contribution', contribution);
  function contribution(contributionService) {
    var vm = this;
    vm.title = "contribution";
    
    contributionService.fetchAllRepos().then(function(data){
      vm.repos = data;
    });
   }
})();
