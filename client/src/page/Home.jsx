import React from 'react'
import NavBar from '../components/NavBar.jsx';
import UserList from '../components/UserList.jsx';
import Loading from '../components/Loading.jsx';
import { useUserContext } from '../components/UserProvider.jsx';

import Pagination from '../components/Pagination.jsx';


const Home = () => {

    const { listUser } = useUserContext()


    if (listUser == null) {
        return <Loading />
    }

    return (
        <div className='space-y-2'>
            <NavBar />
            <Pagination />
            <UserList />
            <Pagination />
        </div>
    )
}

export default Home