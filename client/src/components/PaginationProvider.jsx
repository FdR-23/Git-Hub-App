import axios from 'axios'
import LinkHeader from 'http-link-header'
import React, { useState, useEffect, useContext } from 'react'

import { linkNextListUser } from '../services/fetchLinkPages'
import { allUser } from '../services/fetchAllUser'

import { useUserContext } from './UserProvider'

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
        const { url } = pages.nextPage
        const response = await axios.get(`${url}`)
        const info = response;
        setListUser(info.data)
        const linkHeader = info.headers.link;
        const links = LinkHeader.parse(linkHeader);

        setPages({
            nextPage: { url: links.refs[0].uri },
            //firstPage: { url: links.refs[1].uri }
        })
    }

    const previousPage = async () => {
        // const { url } = pages.firstPage
        // const response = await axios.get(`${url}`)
        //  const info = response;
        const info = await allUser()
        setListUser(info)
        const links = await linkNextListUser()
        setPages(links)
    }

    return (
        <div>
            <pageContext.Provider value={{ nextPage, previousPage }}>
                {children}
            </pageContext.Provider>
        </div>
    )
}

export default Pagination