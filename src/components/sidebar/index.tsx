import React, { useState } from 'react'

import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useLocation } from 'react-router-dom'

import { menuItems } from '@/helpers/menuItems'

import { FooterSidebar } from './footer'
import { Header } from './header'

export const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true)
  const location = useLocation()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-big-gray-50 p-4 ${isOpen ? 'translate-x-0' : '-translate-x-[80%]'} border-r-2 transition-transform duration-300 ease-in-out`}
    >
      <div className="mb-6 flex items-center justify-between">
        <Header />
        <div
          className="cursor-pointer text-big-gray-300 lg:hidden"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon
            icon={isOpen ? faChevronLeft : faChevronRight}
            className="text-big-gray-100 text-xl hover:text-big-gray-300"
          />
        </div>
      </div>

      <nav>
        <ul className="mr-12 mt-12">
          {menuItems.map(({ name, route, notificationCount }) => (
            <li
              key={name}
              className={`mb-4 flex h-10 w-full cursor-pointer items-center justify-start rounded-full p-4 transition-all ${
                location.pathname === route
                  ? 'hover:bg-big-gray-100 bg-big-gray-400 text-white hover:text-big-gray-800'
                  : 'hover:bg-big-gray-100 text-big-gray-400 hover:text-big-gray-800'
              }`}
            >
              <a href={route} className={'text-sm font-bold'}>
                {name}
                {notificationCount && (
                  <span className="bg-big-green-50 ml-10 rounded-full px-2 py-1 text-[10px] text-big-gray-800">
                    {notificationCount}
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <FooterSidebar />
    </div>
  )
}
