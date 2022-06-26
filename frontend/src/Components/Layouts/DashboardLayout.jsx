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
                                            <svg width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                                <path d="M75.23 33.4L320 63.1L564.8 33.4C571.5 32.56 578 36.06 581.1 42.12L622.8 125.5C631.7 143.4 622.2 165.1 602.9 170.6L439.6 217.3C425.7 221.2 410.8 215.4 403.4 202.1L320 63.1L236.6 202.1C229.2 215.4 214.3 221.2 200.4 217.3L37.07 170.6C17.81 165.1 8.283 143.4 17.24 125.5L58.94 42.12C61.97 36.06 68.5 32.56 75.23 33.4H75.23zM321.1 128L375.9 219.4C390.8 244.2 420.5 255.1 448.4 248L576 211.6V378.5C576 400.5 561 419.7 539.6 425.1L335.5 476.1C325.3 478.7 314.7 478.7 304.5 476.1L100.4 425.1C78.99 419.7 64 400.5 64 378.5V211.6L191.6 248C219.5 255.1 249.2 244.2 264.1 219.4L318.9 128H321.1z" />
                                            </svg>
                                        </span>
                                        <span className="mx-2 text-sm font-normal">
                                            Products
                                        </span>
                                    </Link>
                                    <Link to={'#'} className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800" href="#">
                                        <span className="text-left">
                                            <svg width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path d="M160 416H96c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h64c17.67 0 32-14.33 32-32S177.7 32 160 32H96C42.98 32 0 74.98 0 128v256c0 53.02 42.98 96 96 96h64c17.67 0 32-14.33 32-32S177.7 416 160 416zM502.6 233.4l-128-128c-12.51-12.51-32.76-12.49-45.25 0c-12.5 12.5-12.5 32.75 0 45.25L402.8 224H192C174.3 224 160 238.3 160 256s14.31 32 32 32h210.8l-73.38 73.38c-12.5 12.5-12.5 32.75 0 45.25s32.75 12.5 45.25 0l128-128C515.1 266.1 515.1 245.9 502.6 233.4z" />
                                            </svg>
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
                        <div className="h-screen px-4 pb-24 md:px-6">
                            {props.children}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
