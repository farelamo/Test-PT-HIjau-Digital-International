import Cookies from 'js-cookie'
import React from 'react'
import { Link, useHistory } from 'react-router-dom'

export const DashboardLayout = (props) => {

    let history = useHistory()
    
    const handleLogout = () => {
        Cookies.remove('token')
        Cookies.remove('role')
        history.push('/')
    }
    
    return (
        <>
            <main className="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800">
                <div className="flex items-start justify-between">
                    <div className="relative hidden h-screen shadow-lg lg:block w-80">
                        <div className="h-full bg-white dark:bg-gray-700">
                            <div className="flex items-center justify-start pt-6 ml-8">
                                <p className="text-xl font-bold dark:text-white">
                                    Plannifer
                                </p>
                            </div>
                            <nav className="mt-6">
                                <div>
                                    <Link to={'/dashboard'} className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800" href="#">
                                        <span className="text-left">
                                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1472 992v480q0 26-19 45t-45 19h-384v-384h-256v384h-384q-26 0-45-19t-19-45v-480q0-1 .5-3t.5-3l575-474 575 474q1 2 1 6zm223-69l-62 74q-8 9-21 11h-3q-13 0-21-7l-692-577-692 577q-12 8-24 7-13-2-21-11l-62-74q-8-10-7-23.5t11-21.5l719-599q32-26 76-26t76 26l244 204v-195q0-14 9-23t23-9h192q14 0 23 9t9 23v408l219 182q10 8 11 21.5t-7 23.5z">
                                                </path>
                                            </svg>
                                        </span>
                                        <span className="mx-2 text-sm font-normal">
                                            Home
                                        </span>
                                    </Link>
                                    { Cookies.get('role') === 'owner' && (
                                        <>
                                            <Link to={'data-owner'} className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800" href="#">
                                                <span className="text-left">
                                                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1728 608v704q0 92-66 158t-158 66h-1216q-92 0-158-66t-66-158v-960q0-92 66-158t158-66h320q92 0 158 66t66 158v32h672q92 0 158 66t66 158z">
                                                        </path>
                                                    </svg>
                                                </span>
                                                <span className="mx-4 text-sm font-normal">
                                                    Data Owner
                                                </span>
                                            </Link>
                                        </>
                                    )}
                                    
                                    { Cookies.get('role') === 'staff' && (
                                        <>
                                            <Link to={'/data-staff'} className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800" href="#">
                                                <span className="text-left">
                                                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1728 608v704q0 92-66 158t-158 66h-1216q-92 0-158-66t-66-158v-960q0-92 66-158t158-66h320q92 0 158 66t66 158v32h672q92 0 158 66t66 158z">
                                                        </path>
                                                    </svg>
                                                </span>
                                                <span className="mx-4 text-sm font-normal">
                                                    Data Staff
                                                </span>
                                            </Link>
                                        </>
                                    )}
                                    <Link to={'/product'} className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800" href="#">
                                        <span className="text-left">
                                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1472 992v480q0 26-19 45t-45 19h-384v-384h-256v384h-384q-26 0-45-19t-19-45v-480q0-1 .5-3t.5-3l575-474 575 474q1 2 1 6zm223-69l-62 74q-8 9-21 11h-3q-13 0-21-7l-692-577-692 577q-12 8-24 7-13-2-21-11l-62-74q-8-10-7-23.5t11-21.5l719-599q32-26 76-26t76 26l244 204v-195q0-14 9-23t23-9h192q14 0 23 9t9 23v408l219 182q10 8 11 21.5t-7 23.5z">
                                                </path>
                                            </svg>
                                        </span>
                                        <span className="mx-2 text-sm font-normal">
                                            Products
                                        </span>
                                    </Link>
                                    <Link to={'#'} className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800" href="#">
                                        <span className="text-left">
                                            {/* ICON LOGOUT */}
                                        </span>
                                        <span onClick={handleLogout} className="mx-4 text-sm font-normal">
                                            Logout
                                        </span>
                                    </Link>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div className="flex flex-col w-full md:space-y-4">
                        <header className="z-40 flex items-center justify-between w-full h-16">
                            <div className="block ml-6 lg:hidden">
                                <button className="flex items-center p-2 text-gray-500 bg-white rounded-full shadow text-md">
                                    <svg width="20" height="20" className="text-gray-400" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                        </header>
                        <div className="h-screen px-4 pb-24 overflow-auto md:px-6">
                            {props.children}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
