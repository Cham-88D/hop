import Link from "next/link";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";
import { useRouter } from 'next/router';
import {useState} from "react";

const Navbar = () => {
    const router = useRouter();
    const [active] = useState(router.pathname);


    return (
        <div className="w-full">
            <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
                {/* Logo  */}
                <Disclosure>
                    {({ open }) => (
                        <>
                            <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-pink-500 dark:text-gray-100">
                    <span>
                      <Image
                          src="/logo.png"
                          alt="N"
                          width="82"
                          height="82"
                          className="w-20"
                      />
                    </span>
                    <span className={"text-3xl"}>Hope</span>
                  </span>
                                </Link>

                                <Disclosure.Button
                                    aria-label="Toggle Menu"
                                    className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-pink-500 focus:text-pink-500 focus:bg-pink-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                                    <svg
                                        className="w-6 h-6 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24">
                                        {open && (
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                                            />
                                        )}
                                        {!open && (
                                            <path
                                                fillRule="evenodd"
                                                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                                            />
                                        )}
                                    </svg>
                                </Disclosure.Button>

                                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                                    <>
                                        <Link href="/" className={`${active === '/' ? "bg-pink-100 " : "text-pink-600"} text-xl w-full px-4 py-2 -ml-4 rounded-md dark:text-gray-300 hover:text-pink-400 focus:text-pink-400 focus:bg-pink-100 dark:focus:bg-gray-800 focus:outline-none`}>
                                            Home
                                        </Link>
                                        <Link  href="/" className={`${active === '/about' ? "bg-pink-100 " : "text-pink-600"} text-xl w-full px-4 py-2 -ml-4  rounded-md dark:text-gray-300 hover:text-pink-400 focus:text-pink-400 focus:bg-pink-100 dark:focus:bg-gray-800 focus:outline-none`}>
                                            About Us
                                        </Link>
                                        <Link  href="/" className={`${active === '/comm' ? "bg-pink-100 " : "text-pink-600"} text-xl  w-full px-4 py-2 -ml-4 rounded-md dark:text-gray-300 hover:text-pink-400 focus:text-pink-400 focus:bg-pink-100 dark:focus:bg-gray-800 focus:outline-none`}>
                                            Community
                                        </Link>

                                        <Link href="/login" className=" text-xl w-full px-6 py-2 mt-3 text-center text-white bg-pink-500 rounded-md lg:ml-5">
                                           Login
                                        </Link>
                                    </>
                                </Disclosure.Panel>
                            </div>
                        </>
                    )}
                </Disclosure>

                {/* menu  */}
                <div className="hidden text-center lg:flex lg:items-center">
                    <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
                        <li className="mr-3 nav__item" >
                            <Link href="/" className={`${active === "/" ? "bg-pink-100 " : "text-pink-600"} text-xl inline-block px-4 py-2 text-lg font-normal   no-underline rounded-md dark:text-gray-200 hover:text-pink-500 focus:text-pink-500 focus:bg-pink-100 focus:outline-none dark:focus:bg-gray-800`}>
                                Home
                            </Link>
                        </li>
                        <li className="mr-3 nav__item" >
                            <Link href="/"  className={`${active === '/about' ? "bg-pink-100 " : "text-pink-600"} text-xl inline-block px-4 py-2 text-lg font-normal 0 no-underline rounded-md dark:text-gray-200 hover:text-pink-500 focus:text-pink-500 focus:bg-pink-100 focus:outline-none dark:focus:bg-gray-800`}>
                                About Us
                            </Link>
                        </li>
                        <li className="mr-3 nav__item">
                            <Link href="/"  className={`${active === '/comm' ? "bg-pink-100 " : "text-pink-600"} text-xl inline-block px-4 py-2 text-lg font-normal no-underline rounded-md dark:text-gray-200 hover:text-pink-500 focus:text-pink-500 focus:bg-pink-100 focus:outline-none dark:focus:bg-gray-800`}>
                                Community
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="hidden mr-3 space-x-4 lg:flex nav__item">
                    <Link href="/login" className="text-xl px-10 py-2 text-white bg-pink-600 rounded-full md:ml-5 ">
                        Login
                    </Link>

                </div>
            </nav>
        </div>
    );
}

export default Navbar;