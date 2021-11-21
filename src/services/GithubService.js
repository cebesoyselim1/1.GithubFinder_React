import axios from "axios";

export default class GithubService {
    url = "https://api.github.com";

    GetUsers = (username) => {
        const requiredUrl = `${this.url}/search/users?q=${username}`;
        return axios(requiredUrl);
    }

    GetUser = (username) => {
        const requiredUrl = `${this.url}/users/${username}`;
        return axios(requiredUrl);
    }

    GetRepos = (username) => {
        const requiredUrl = `${this.url}/users/${username}/repos`;
        return axios(requiredUrl);
    }
}