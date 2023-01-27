import axios from "axios";

const userRepo = async (username) => {

    try {
        const info = await axios.get(`/api/users/${username}/repos`)
            .then((info) => info.data)
        return info
    } catch (error) {
        throw error
    }
}


export { userRepo }