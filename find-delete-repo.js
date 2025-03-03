// Import required modules
const axios = require('axios');
require('dotenv').config();

const GITHUB_USERNAME = process.env.GITHUB_USERNAME; // Replace with your GitHub username
const GITHUB_TOKEN = process.env.GITHUB_TOKEN; // Store your token in .env file

const headers = {
  Authorization: `token ${GITHUB_TOKEN}`,
  Accept: 'application/vnd.github.v3+json',
};

async function getEmptyRepos() {
  try {
    const repos = await axios.get(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`, { headers });

    const emptyRepos = repos.data.filter(repo => repo.size === 0 || repo.default_branch === null);

    if (emptyRepos.length === 0) {
      console.log('No empty repositories found.');
    } else {
      console.log('Empty Repositories:');
      for (const repo of emptyRepos) {
        console.log(`- ${repo.name} (${repo.html_url})`);
        await deleteRepo(repo.name);
      }
    }
  } catch (error) {
    console.error('Error fetching repositories:', error.response ? error.response.data : error.message);
  }
}

async function deleteRepo(repoName) {
  try {
    await axios.delete(`https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}`, { headers });
    console.log(`Deleted repository: ${repoName}`);
  } catch (error) {
    console.error(`Error deleting repository ${repoName}:`, error.response ? error.response.data : error.message);
  }
}

getEmptyRepos();
