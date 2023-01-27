import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { userRepo } from '../services/fetchRepoUser';
const UserRespo = () => {

    const { username } = useParams();
    const [info, setInfo] = useState(null)
    console.log(info)

    useEffect(() => {
        let isCancell = false;
        userRepo(username)
            .then((result) => {
                if (!isCancell) {
                    setInfo(result)
                }
            })
        return () => {
            isCancell = true
        };
    }, [])

    if (info == null) {
        return <p>Loading....</p>
    }




    return (
        <div>UserRespo</div>
    )
}


export default UserRespo