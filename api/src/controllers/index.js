const { Octokit } = require("octokit");
const parse = require('parse-link-header');
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const octokit = new Octokit({
    auth: GITHUB_TOKEN
});

const allUser = async (req, res) => {
    try {
        const info = await octokit.request('GET /users{?since}', {

        })
        const linkHeader = info.headers.link;
        const links = parse(linkHeader);
        const list = info.data

        res
            .status(200)
            .json({ list, links })
    } catch (error) {
        res
            .status(400)
            .json({ message: `Data Not Found` })
    }
}

const detailUser = async (req, res) => {
    const { username } = req.params
    try {
        const data = await octokit.request(`GET /users/${username}`, {
            username: username
        }).then((info) => info.data)
        res
            .status(200)
            .json(data)
    } catch (error) {
        res
            .status(400)
            .json({ message: `Data Not Found` })
    }
}

const repoUser = async (req, res) => {
    const { username } = req.params
    try {
        const data = await octokit.request(`GET /users/${username}/repos{?type,sort,direction,per_page,page}`, {
            username: username,
            per_page: 100
        })
            .then((result) => result.data)
        res
            .status(200)
            .json(data)
    } catch (error) {
        res
            .status(400)
            .json({ message: `Data Not Found` })
    }

}





module.exports = {
    allUser,
    detailUser,
    repoUser
}