import React from 'react'
import UserItems from './UserItems'
import { useUserContext } from './UserProvider.jsx'


const UserList = () => {

    const { listUser } = useUserContext();
    return (
        <div className='bg-slate-900/10 rounded-sm w-full h-full my-2 p-2'>
            <div className='grid grid-cols-6 border-b-2 border-stone-700 text-center font-semibold text-sm'>
                <p className="mb-1"># ID</p>
                <p className="mb-1">Avatar</p>
                <p className="mb-1 col-span-3">Name</p>
                <p className="mb-1">Url</p>
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