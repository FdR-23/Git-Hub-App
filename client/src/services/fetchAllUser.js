import axios from "axios";

export const allUser = async () => {
    try {
        const info = await axios.get('/api/users')
            .then((info) => info.data)
            .then((result) => result.list)
        return info
    } catch (error) {
        throw error
    }
}






