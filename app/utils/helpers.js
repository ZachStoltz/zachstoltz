const axios = require('axios');

const getRepos = () => {
  return axios.get('https://api.github.com/users/zachstoltz/repos');
};

const getUserProfile = () => {
  return axios.get('https://api.github.com/users/zachstoltz');
};

const helpers = {
  getRepos,
  getUserProfile,
};
module.exports = helpers;
