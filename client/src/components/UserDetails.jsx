import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { userDetails } from '../services/fetchDetailUser.js'
import { Link } from 'react-router-dom'
import Loading from './Loading.jsx'

const UserDetails = () => {
    const { username } = useParams();
    const [info, setInfo] = useState(null)

    useEffect(() => {
        let isCancell = false;
        userDetails(username)
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
        return <Loading/>

    }
    const { login, name, company, avatar_url, blog, location, html_url, followers, following, created_at, public_repos } = info

    const date = new Date(created_at);
    const date_created = (date.toString().slice(0, 15));
    return (

        <div className='m-auto flex flex-col h-screen space-y-2'>

            <div className='flex flex-col bg-gray-200  rounded-b-sm '>
                <div className='flex flex-row justify-center space-x-2 mt-4'>
                    <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" className="octicon octicon-mark-github v-align-middle">
                        <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                    <h2 className='text-2xl'>User Details</h2>
                </div>

                <div className='flex flex-row justify-end  m-2'>
                    <Link to='/'>
                        <button className='bg-transparent hover:bg-gray-800
                     text-slate-700 font-semibold hover:text-white text-xs sm:text-md py-1 px-1 sm:px-2 border border-black hover:border-transparent rounded-xl'>
                            Back Home
                        </button>
                    </Link>

                </div>
            </div>

            <div className='block m-auto p-2  border-black bg-zinc-100 border-2 shadow-md shadow-black rounded-xl w-80 sm:w-96  '>
                <div className=' '>
                    <img className='w-60 rounded-full m-auto shadow-black shadow' src={avatar_url} alt="avatar_url" />
                </div>
                <div className='flex flex-row justify-center'>
                    <h2 className='font-bold text-2xl'>{name}</h2>
                </div>
                <div className='flex flex-row justify-center'>
                    <h2 className='font-normal text-xl'>{login}</h2>
                </div>

                <div className='flex flex-row items-center space-x-2 pl-6 sm:pl-12 py-2'>
                    <svg text="muted" aria-hidden="true" height="20" viewBox="0 0 16 16" version="1.1" width="20" data-view-component="true" className="octicon octicon-people">
                        <path fillRule="evenodd" d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"></path>
                    </svg>
                    <span className='font-bold'>{followers}</span>
                    <p>followers</p>
                    <span>-</span>
                    <span className='font-bold'>{following}</span>
                    <p>following</p>
                </div>

                <ul className='space-y-4'>
                    <li className={`${company ? 'flex flex-row items-center space-x-2 pl-6 sm:pl-12' : 'hidden'}`}>
                        <svg className="octicon octicon-organization" viewBox="0 0 16 16" version="1.1" width="20" height="20" aria-hidden="true"><path fillRule="evenodd" d="M1.5 14.25c0 .138.112.25.25.25H4v-1.25a.75.75 0 01.75-.75h2.5a.75.75 0 01.75.75v1.25h2.25a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25h-8.5a.25.25 0 00-.25.25v12.5zM1.75 16A1.75 1.75 0 010 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 00.25-.25V8.285a.25.25 0 00-.111-.208l-1.055-.703a.75.75 0 11.832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0114.25 16h-3.5a.75.75 0 01-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 01-.75-.75V14h-1v1.25a.75.75 0 01-.75.75h-3zM3 3.75A.75.75 0 013.75 3h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 3.75zM3.75 6a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM3 9.75A.75.75 0 013.75 9h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 9.75zM7.75 9a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM7 6.75A.75.75 0 017.75 6h.5a.75.75 0 010 1.5h-.5A.75.75 0 017 6.75zM7.75 3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z"></path></svg>
                        <div className='flex flex-wrap'>
                            {company && company.split(',').map((elemt, index) =>
                                <p key={index}>{elemt}</p>
                            )}
                        </div>
                    </li>
                    <li className={`${blog ? 'flex flex-row items-center space-x-2 pl-6 sm:pl-12' : 'hidden'}`}>
                        <svg aria-hidden="true" height="20" viewBox="0 0 16 16" version="1.1" width="20" data-view-component="true" className="octicon octicon-link">
                            <path fillRule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path>
                        </svg>
                        <a href={blog} tarrget="_blank" rel="noopener noreferrer">{blog}</a>
                    </li>

                    <li className={`${location ? 'flex flex-row items-center space-x-2 pl-6 sm:pl-12' : 'hidden'}`}>
                        <svg className="octicon octicon-location" viewBox="0 0 16 16" version="1.1" width="20" height="20" aria-hidden="true"><path fillRule="evenodd" d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                        <p>{location}</p>
                    </li>

                    <li className={`${date_created ? 'flex flex-row items-center justify-center font-semibold' : 'hidden'}`}>
                        <p>{date_created}</p>
                    </li>

                </ul>

            </div>
        </div>
    )
}

export default UserDetails