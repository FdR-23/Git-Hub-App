const { Octokit } = require("octokit");
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const octokit = new Octokit({
    auth: GITHUB_TOKEN
});

const allUser = async (req, res) => {
    try {
        const info = await octokit.request('GET /users{?since}', {
            per_page: 100
        })
        const links = info.headers.link.split(",")
        const nextPage = (links[0].split(";"))
        const firstPage = (links[1].split(";"))
        const list = info.data
        res
            .status(200)
            .json({ list, nextPage, firstPage })
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
        })
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
            username: username

        })
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