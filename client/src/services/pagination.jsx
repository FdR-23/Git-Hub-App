import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'

import { linkNextListUser } from './fetchLinkPages'
import { useUserContext } from '../components/UserProvider'

export const pageContext = React.createContext()
export function usePageContext() {
    return useContext(pageContext);
}

function Pagination({ children }) {
    const [pages, setPages] = useState(null)
    const { setListUser } = useUserContext();
    useEffect(() => {
        linkNextListUser()
            .then(data => setPages(data))
    }, [])

    const nextPage = async () => {
        const since = pages.nextPage[0].replace(/</g, "").replace(/>/g, "");
        const response = await axios.get(`${since}`)
        const info = response.data;
        setListUser(info)
        const links = response.headers.link.split(",")
        const nextPage = (links[0].split(";"))
        const firstPage = (links[1].split(";"))
        setPages({ nextPage, firstPage })
    }

    const firstPage = async () => {
        const since = link.firstPage[0].replace(/</g, "").replace(/>/g, "");
        //  const response = await axios.get(`${since}`)
        // const info = response.data;
        console.log(since)
    }

    return (
        <div>
            <pageContext.Provider value={{ nextPage, firstPage }}>
                {children}
            </pageContext.Provider>
        </div>
    )
}

export default Pagination