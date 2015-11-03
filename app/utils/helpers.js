const axios = require('axios');

function getRepos(){
  return axios.get('https://api.github.com/users/zachstoltz/repos');
}

let helpers = {
  getRepos: getRepos
};
module.exports = helpers;
