import React from 'react'
import { Link } from 'react-router-dom'

function UserItems({ element }) {
  const { login, id, avatar_url } = element

  return (
    <div className='grid grid-cols-6 gap-1 my-2  bg-stone-50/50 p-1 rounded-sm'>
      <div className='flex items-center justify-center font-bold text-lg sm:text-lg text-slate-800'>{id}</div>

      <div className='flex items-center justify-center'>
        <img className='w-12 rounded-full'
          src={avatar_url} alt="avatar_url" /></div>

      <div className=' flex items-center justify-center col-span-2 overflow-visible font-semibold'>{login}</div>
      <div className=' flex items-center justify-center  text-sm sm:text-base overflow-auto font-semibold'>
        <Link className='text-blue-800 hover:underline' to={`/detail/${login}`} >Details</Link>
      </div>
      <div className=' flex items-center hover:underline justify-center text-sm sm:text-base overflow-auto font-semibold'>
        <Link className='text-blue-800' to={`/repo/${login}`}>Repos</Link>
      </div>
      {/* 
      <div className=' flex items-center justify-center col-span overflow-auto font-semibold'>
        <a href={html_url} target='_blank'>Link GitHub</a></div> */}



    </div >
  )
}

export default UserItems