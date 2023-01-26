import React, { useEffect, useState } from 'react'
import { fetchDetailUser } from '../services/fetchDetailUser.js'
const UserDetails = ({ username }) => {

    const [info, setInfo] = useState()


    useEffect(() => {
        fetchDetailUser(username)
            .then((result) => console.log(result))
    }, [])


    return (
        <div>



        </div>
    )
}

export default UserDetails