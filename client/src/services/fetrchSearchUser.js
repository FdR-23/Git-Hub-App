import axios from "axios";

const searchUser = async (username) => {
    try {
        const info = await axios.get(`/api/user?username=${username}`)
            .then((info) => info.data)

        return info
    } catch (error) {
        const { message } = error.response.data;
        alert(message)
    }
}


export { searchUser }
