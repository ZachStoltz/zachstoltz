(function (){
  'use strict';

  angular.module('app.home', ['ngResource']).controller('home', home );

  function home(){

    var vm = this;

    vm.title = "Welcome";
  }
})();
