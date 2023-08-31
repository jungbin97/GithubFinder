class Github{
    constructor(){
        this.client_id = '2a0909e72cab13ec6edc';
        this.client_secret = "938a4514ccf26eff769471d07ca14ba653786675";
        this.count = 5;
        this.repos_sort = "created: asc";
    }

    async getUser(user){
        const profilesponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profilesponse.json();

        const repos = await repoResponse.json();
        
        return {
            profile,
            repos
        }
    }
}

// const github = new Github;

// github.getUser('jungbin97')
// .then(data => console.log(data))

