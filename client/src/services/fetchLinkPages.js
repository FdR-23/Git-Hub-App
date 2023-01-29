import axios from "axios";

const linkNextListUser = async () => {
    try {
        const info = await axios.get('/api/users')
            .then((result) => result.data)
            .then((data) => data.links)
        const firstPage = info.first
        const nextPage = info.next
        return { firstPage, nextPage }
    } catch (error) { 
        throw error
    }
}

export { linkNextListUser }