"use client";

import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import {
  SignInButton,
  SignUpButton,
  UserButton,
  SignedOut,
  SignedIn,
} from "@clerk/nextjs";
import { logo } from "../../public/images";

export const Navbar = () => {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
  ];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-1">
        {/* Logo  */}
        <Link href="/">
          <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
            <span>
              <Image
                src={logo}
                width="32"
                alt="P"
                height="32"
                className="w-12"
              />
            </span>
            <span className="text-xl font-bold leading-snug tracking-tight lg:text-4xl lg:leading-tight xl:text-3xl xl:leading-tight dark:text-white">PostCraft-AI</span>
          </span>
        </Link>

        {/* Get started */}
        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
          <ThemeChanger />
          <div className="hidden mr-3 lg:flex nav__item">
            <SignedOut>
              <div className="flex gap-4">
                <SignInButton mode="modal">
                  <button className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white font-bold py-2 px-4 rounded">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-4 rounded">
                    Sign Up
                  </button>
                </SignUpButton>
              </div>
            </SignedOut>
            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10",
                  },
                }}
              />
            </SignedIn>
          </div>
        </div>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                aria-label="Toggle Menu"
                className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  {open ? (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </Disclosure.Button>

              <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                <>
                  {navigation.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="w-full px-4 py-2 font-bold -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <SignedOut>
                    <SignInButton mode="modal">
                      <button className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white font-bold py-2 px-4 rounded">
                        Sign In
                      </button>
                    </SignInButton>
                    <SignUpButton mode="modal">
                      <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-4 rounded">
                        Sign Up
                      </button>
                    </SignUpButton>
                  </SignedOut>
                  <SignedIn>
                    <UserButton
                      appearance={{
                        elements: {
                          avatarBox: "w-10 h-10",
                        },
                      }}
                    />
                  </SignedIn>
                </>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* Menu */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link
                  href={menu.href}
                  className="inline-block px-4 font-bold py-2 text-lg text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                >
                  {menu.name}
                </Link>
              </li>
            ))}
            {/* Show "Generate" only when the user is signed in */}
            <SignedIn>
              <li className="mr-3 nav__item">
                <Link
                  href="/generate"
                  className="inline-block px-4 py-2 text-lg font-bold text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                >
                  Generate
                </Link>
              </li>
            </SignedIn>
          </ul>
        </div>
      </nav>
    </div>
  );
};
