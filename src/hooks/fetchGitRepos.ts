export interface GitRepoData {
    name: string;
    svnUrl: string;

}

export default async function fetchGitRepos() {
    const res = await fetch("https://api.github.com/users/bippolaroid/repos");
    const data: GitRepoData[] = await res.json();
    return data;
}