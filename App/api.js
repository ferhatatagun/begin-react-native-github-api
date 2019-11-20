function getRepo() {
    fetch('https://api.github.com/users/+'{username}+'/repos', {
              method: 'GET',
              headers: {
                  Accept: 'application/vnd.github.v3+json'
              },
              body: JSON.stringify({
              repoUsers: 'reactjs',
          }),
      });
  }

