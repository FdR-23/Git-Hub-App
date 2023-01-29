import React from 'react'
import UserItems from './UserItems'
import { useUserContext } from './UserProvider.jsx'


const UserList = () => {

    const { listUser } = useUserContext();
    return (
        <div className='bg-slate-900/10 rounded-sm w-full sm:w-9/12 m-auto h-full my-2 p-2 '>
            <div className='grid grid-cols-6  border-stone-700 text-center font-semibold text-sm'>
                <p className="">ID</p>
                <p className="">Avatar</p>
                <p className=" col-span-2">Name</p>
                <p className="">Details</p>
                <p className="">Repos</p>
            </div>

            {listUser && listUser.map((elements) =>
                <UserItems
                    key={elements.id}
                    element={elements}
                />
            )}
        </div>
    )
}

export default UserList