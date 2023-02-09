class GithubView {
  constructor(model, client) {
    this.model = model;
    this.client = client;

    const submitButtonEl = document.querySelector('#submit-button');
    const repoInputEl = document.querySelector('#repo-name-input');

    submitButtonEl.addEventListener('click', () => {
      const repoName = repoInputEl.value;

      this.client.getRepoInfo(repoName, repoData => {
        console.log(repoData);
        this.display(repoData)
      });
    });
  }

  display(repoData) {
    document.getElementById('repo-name').textContent = repoData.full_name
    document.getElementById('repo-description').textContent = repoData.description
    document.getElementById('profile-img').src = repoData.organization.avatar_url
  }
}

module.exports = GithubView;