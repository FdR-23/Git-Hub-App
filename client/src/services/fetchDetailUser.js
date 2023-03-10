import axios from "axios";

const userDetails = async (username) => {

    try {
        const info = await axios.get(`/api/users/${username}/details`)
            .then((info) => info.data)
        return info
    } catch (error) {
        throw error
    }
}


export { userDetails }