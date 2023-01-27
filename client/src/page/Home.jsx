import React from 'react'
import UserList from '../components/UserList.jsx'

import { useUserContext } from '../components/UserProvider.jsx';
import { usePageContext } from "../services/PaginationProvider.jsx";



const Home = () => {
    const { nextPage } = usePageContext()
    const { listUser } = useUserContext()


    if (listUser == null) {
        return <p>Loading</p>
    }

    return (
        <div>
            <UserList />


        </div>
    )
}

export default Home