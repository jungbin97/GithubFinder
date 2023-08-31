class UI{
    constructor(){
        this.profile = document.querySelector('.profile');
    }
    
    showProfile(user){
        console.log("UI class");
        
        // 벡틱으로 
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${user.avatar_url}">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                </div>
                <div class="col-md-9">
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repositories: ${user.public_repos}</span>
                        <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-success">Followers: ${user.followers}</span>
                        <span class="badge badge-info">Following: ${user.following}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Company: ${user.company}
                            </li>
                            <li class="list-group-item d-flex align-items-center">
                                Blog: <a href="${user.blog}" target="_blank">${user.blog}</a>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                location: ${user.location}
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Creaated_at: ${user.created_at}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repositories</h3>
            <div class="repos">
            </div>
        </div>
        `;
    }
    
    showRepos(repos){
        let output = '';

        repos.forEach((repo) => {
            output += `
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                        <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                        <span class="badge badge-success">Forks: ${repo.forks_count}</span>
                        <span class="badge badge-info">Language: ${repo.language}</span>
                    </div>
                </div>
            </div>
            `
        });
        
        document.querySelector('.repos').innerHTML = output;
    }

}