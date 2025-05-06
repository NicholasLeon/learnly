"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SettingsSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="logo-sidebar"
        aria-expanded={isOpen}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform bg-gray-50 dark:bg-gray-800 overflow-y-auto px-3 py-4 ${
          isOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"
        }`}
        aria-label="Sidebar"
      >
        <Link
          href="https://flowbite.com/"
          className="flex items-center ps-2.5 mb-5"
        >
          <Image
            src="/favicon.ico"
            alt="Flowbite Logo"
            width={28}
            height={28}
            className="me-3 sm:h-7"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
          </span>
        </Link>

        <ul className="space-y-2 font-medium">
          {/* List Item Example */}
          <li>
            <Link
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg
                className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 22 21"
              >
                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
              </svg>
              <span className="ms-3">Profile</span>
            </Link>
          </li>
        </ul>
      </aside>

      {/* Content Wrapper */}
      <div className="p-4 sm:ml-64">
        <div className="p-4 rounded-lg">
          <p className="text-gray-700">Your content here...</p>
        </div>
      </div>
    </>
  );
}
