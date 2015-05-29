(function () {
  'use strict';

  angular.module('app.home', []).controller('home', home);
  function home(contributionService) {
    var vm = this;
    contributionService.fetchGithub().then(function(gh){
      vm.github = gh;
    });
  }
})();