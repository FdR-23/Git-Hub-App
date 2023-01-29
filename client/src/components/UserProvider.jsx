import React, { useContext, useEffect, useState, useMemo } from 'react'
import { allUser } from '../services/fetchAllUser';
import Pagination from './PaginationProvider';
const userContext = React.createContext()

export function useUserContext() {
    return useContext(userContext);
}


function UserProvider({ children }) {
    const [listUser, setListUser] = useState(null);

    useEffect(() => {
        allUser()
            .then(data => setListUser(data))
    }, [])

    return (
        <userContext.Provider value={{ listUser, setListUser }}>
            <Pagination>
                {children}
            </Pagination>
        </userContext.Provider>
    )
}
export default UserProvider