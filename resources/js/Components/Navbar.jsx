import {useState} from "react"
import NavLink from "@/Components/NavLink.jsx";
import {Link, usePage} from "@inertiajs/react";
import Dropdown from "@/Components/Dropdown.jsx";

export const Navbar = () => {
    const {auth} = usePage().props
    const [state, setState] = useState(false)

    return (
        <nav className="bg-transparent w-full md:text-md md:border-none">
            <div className="container">
                <div className="items-center max-w-screen-full md:flex">
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="/" className="text-2xl font-bold text-red-600 hover:text-gray-100 hover-transition">SEA
                            Cinema</a>
                        <div className="md:hidden">
                            <button className="text-gray-500 hover:text-gray-100"
                                    onClick={() => setState(!state)}
                            >
                                {
                                    state ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20"
                                             fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                                        </svg>
                                    )
                                }
                            </button>
                        </div>
                    </div>
                    <div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                        <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                            <NavLink href={route('home')} active={route().current('home')}>Home</NavLink>

                            <NavLink href={route('movies.index')} active={route().current('movies.*') || route().current('order-ticket.*')}>Movies</NavLink>

                            <NavLink href={route('showtimes')} active={route().current('showtimes')}>Show
                                Times</NavLink>

                            <span className='hidden w-px h-6 bg-gray-300 md:block'></span>
                            <div className='space-y-3 items-center gap-x-6 md:flex md:space-y-0'>
                                {auth.user ? (
                                    <>
                                        <div className="hidden md:block">
                                            <Dropdown>
                                                <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-100 bg-neutral-900 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {auth.user.name}

                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                                </Dropdown.Trigger>

                                                <Dropdown.Content>
                                                    <Dropdown.Link
                                                        className={route().current('balance.*') ? "bg-red-600" : ""}
                                                        href={route('balance.index')} as="button">
                                                        Your Balance
                                                    </Dropdown.Link>
                                                    <Dropdown.Link
                                                        className={route().current('transactions.*') ? "bg-red-600" : ""}
                                                        href={route('transactions.index')}
                                                        as="button">
                                                        Transactions History
                                                    </Dropdown.Link>
                                                </Dropdown.Content>
                                            </Dropdown>
                                        </div>

                                        <div className="block md:hidden p-4 bg-neutral-800 rounded">
                                            <li className="font-medium text-base text-gray-100">{auth.user.name}</li>
                                            <li className="font-medium text-sm text-gray-100">{auth.user.username}</li>

                                            <div className="mt-6">
                                                <NavLink href={route('balance.index')}
                                                         active={route().current('balance.index')}>Your
                                                    Balance</NavLink>
                                                <NavLink href={route('transactions.index')}
                                                         active={route().current('transactions.*')}>Transactions
                                                    History</NavLink>
                                            </div>
                                        </div>

                                        <li>
                                            <Link href={route('logout')}
                                                  method="post"
                                                  className="block py-3 px-4 text-center text-gray-100 bg-transparent hover:bg-red-600 border hover-transition border-red-600 active:bg-red-600 active:shadow-none rounded-lg shadow md:inline">
                                                Logout
                                            </Link>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li>
                                            <Link href={route('register')}
                                                  className="block py-3 text-center hover-transition text-gray-100 hover:text-red-600 hover:bg-white md:hover:bg-transparent border rounded-lg md:border-none"
                                            >
                                                Register
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={route('login')}
                                                  className="block py-3 px-4 text-center text-gray-100 bg-transparent hover:bg-red-600 border hover-transition border-red-600 active:bg-red-600 active:shadow-none rounded-lg shadow md:inline">
                                                Login
                                            </Link>
                                        </li>
                                    </>
                                )}
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
