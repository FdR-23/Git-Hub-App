import axios from "axios";

export const userDetails = async (username) => {
    try {
        const info = await axios.get(`/api/users/${username}/details`)
            .then((info) => info.data)
            .then((result) => result.list)
        return info
    } catch (error) {
        throw error
    }
}
