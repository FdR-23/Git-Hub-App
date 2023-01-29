import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { userRepo } from '../services/fetchRepoUser';
import { Link } from 'react-router-dom';
import Loading from './Loading.jsx';
const UserRespo = () => {

    const { username } = useParams();
    const [info, setInfo] = useState(null)


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
        return <Loading />
    }

    //const { id, name, html_url, language, visibility, owner, } = info


    return (
        <div className='m-auto  h-screen'>

            <div className='flex flex-col bg-gray-200  rounded-b-sm'>
                <div className='flex flex-row justify-center space-x-2 mt-4'>
                    <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" className="octicon octicon-mark-github v-align-middle">
                        <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                    <h2 className='text-2xl'> <span>{username}</span> Repositories </h2>
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




            <div className='m-auto sm:w-3/6 '>
                <ul>
                    {info && info.map((elemt) =>
                        <li key={elemt.id} className='grid grid-cols-8 justify-between border-b gap-1 py-4 border-gray-600'>
                            <div className='col-span-6  block '>

                                <div className='pl-2' >
                                    <a className='text-xl font-semibold sm:text-xl text-blue-600'
                                        href={elemt.html_url} target="_blank" rel="noopener noreferrer">{elemt.name}</a>
                                </div>

                                <div className='pl-2'>
                                    <p className='text-xs'>{elemt.description}</p>
                                </div>

                                <div className='flex pl-4 space-x-3 pt-2'>
                                    <div className='flex items-center space-x-2'>
                                        <span className='w-4 h-4 rounded-full bg-red-900'></span>
                                        <span className='sm:text-sm'>{elemt.language}</span>
                                    </div>
                                    <div className='flex items-center space-x-1'>
                                        <svg aria-label="star" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-star">
                                            <path fillRule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
                                        </svg>
                                        <span>{elemt.watchers_count}</span>
                                    </div>

                                    <div className='flex items-center space-x-1'>
                                        <svg aria-label="fork" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-repo-forked">
                                            <path fillRule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
                                        </svg>
                                        <span>{elemt.forks_count}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-2 flex m-auto'>
                                <a className='font-bold text-blue-800'
                                    href={elemt.html_url} target="_blank" rel="noopener noreferrer">Go Repo</a>
                            </div>
                        </li>
                    )}
                </ul>
            </div >

        </div >
    )
}


export default UserRespo