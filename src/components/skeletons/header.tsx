import React from 'react'

import {
  faMagnifyingGlass,
  faBookmark,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface HeaderProps {
  title: string
  subtitle: string
}

export const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <div>
      <header className="flex justify-between">
        <div>
          <h1 className="text-xl font-extrabold lg:text-3xl">{title}</h1>
          <p className="text-xs lg:text-base">{subtitle}</p>
        </div>
        <div className="space-x-4 transition-all">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="cursor-pointer rounded-md border-2 border-big-gray-100 p-2 text-sm text-big-gray-300 hover:border-big-gray-200"
          />
          <FontAwesomeIcon
            icon={faBookmark}
            className="cursor-pointer rounded-md border-2 border-big-gray-100 p-2 text-sm text-big-gray-300 hover:border-big-gray-200"
          />
        </div>
      </header>
    </div>
  )
}
