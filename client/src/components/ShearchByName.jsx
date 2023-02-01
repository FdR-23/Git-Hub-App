import React, { useState } from 'react'

import { useUserContext } from './UserProvider.jsx';
import { searchUser } from '../services/fetrchSearchUser.js';
import { allUser } from '../services/fetchAllUser.js';

const ShearchByName = () => {
    const [input, setInput] = useState('');

    const { setListUser } = useUserContext();

    function handleChange(e) {
        e.preventDefault()
        setInput(e.target.value)
    }
    const handleAllUser = () => {
        allUser()
            .then(data => setListUser(data))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        searchUser(input)
            .then((data) => setListUser([data.data]))
        setInput("")
    }

    return (
        <div className='flex justify-between m-auto pb-2'>
            <div className='flex pl-2 space-x-2'>
                <form onSubmit={handleSubmit}>
                    <input
                        className="border-2 border-stone-300 rounded-lg pl-2 w-28 sm:w-36"
                        placeholder='Username'
                        value={input}
                        type="text"
                        onChange={(e) => handleChange(e)}
                    />
                </form>
                <button
                    className=' bg-transparent hover:bg-gray-800
                text-slate-700 font-semibold hover:text-white text-xs sm:text-md py-1 px-1 sm:px-2 border border-black hover:border-transparent rounded-xl'
                    type="submit">Search</button>
            </div>

            <div className='flex pr-2'>
                <button
                    className='bg-transparent hover:bg-gray-800
                text-slate-700 font-semibold hover:text-white text-xs sm:text-md py-1 px-1 sm:px-2 border border-black hover:border-transparent rounded-xl'
                    type="button"
                    onClick={() => handleAllUser()}>All Users</button>
            </div>
        </div >
    )
}

export default ShearchByName