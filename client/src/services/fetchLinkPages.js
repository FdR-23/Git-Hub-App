import axios from "axios";
const linkNextListUser = async () => {
    try {
        const info = await axios.get('/api/users')
            .then((info) => info.data)
        const nextPage = info.nextPage
        const firstPage = info.firstPage
         return { nextPage, firstPage }
    } catch (error) {
        throw error
    }
}

export { linkNextListUser }