const axios = require('axios');

function getRepos(){
  return axios.get('https://api.github.com/users/zachstoltz/repos');
}
function getUserProfile(){
  return axios.get('https://api.github.com/users/zachstoltz');
}

let helpers = {
  getRepos: getRepos,
  getUserProfile: getUserProfile
};
module.exports = helpers;
