import React from 'react'
import Left from './left-side-navbar'
import Right from './right-side-navbar'


function Navbar() {
    return (
        <div id='home' className='flex flex-col sm:flex-row gap-3 py-2'>
            <div className=" md:hidden block">
                <div className="select-none font-medium text-xs w-fit  border px-1.5 py-0.5 rounded-md flex gap-0.5 items-center border-green-400 text-green-400">
                    <span className="animate-pulse"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"></path></svg>
                    </span>Available</div>
            </div>
            <div className="flex">
                <Left />
                <Right />
            </div>
        </div>
    )
}

export default Navbar