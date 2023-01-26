import React, { useContext, useEffect, useState, useMemo } from 'react'
import { allUser } from '../services/fetchAllUser';

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
            {children}
        </userContext.Provider>
    )
}
export default UserProvider