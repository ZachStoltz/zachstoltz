(function (){
  'use strict';

  angular.module('app.contribution').factory('contributionService', contributionService);

  function contributionService($http){
    var baseUrl = 'https://api.github.com/users/ZachStoltz';
    
    var fetchGithub = function(){
      var github = $http.get(baseUrl,{cache:true}).then(function(response){
        return response.data;
      });
      return github;
    };
    
    var fetchAllRepos = function (){
      var repos = $http.get(baseUrl+'/repos',{cache:true}).then(function(response){
        return response.data;
      });
      
      return repos;
    };
    return {
      fetchAllRepos: fetchAllRepos,
      fetchGithub: fetchGithub
    };
  };
})();
