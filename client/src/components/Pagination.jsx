import React from 'react'
import { usePageContext } from "../components/PaginationProvider.jsx";


const Pagination = () => {

    const { nextPage } = usePageContext()
    const { previousPage } = usePageContext()
    return (
        <div className='flex justify-center space-x-4'>
            <button onClick={() => previousPage()} >
                <span className='flex items-center font-semibold text-blue-900'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M14.9998 19.9201L8.47984 13.4001C7.70984 12.6301 7.70984 11.3701 8.47984 10.6001L14.9998 4.08008" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    First</span>
            </button>
            <button onClick={() => nextPage()}>
                <span className='flex items-center font-semibold text-blue-900'>Next
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>
            </button>
        </div>
    )
}

export default Pagination