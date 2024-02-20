import React from 'react'

import {
  faMagnifyingGlass,
  faBookmark,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Header: React.FC = () => {
  return (
    <div>
      <header className="flex justify-between">
        <div>
          <h1 className="text-xl font-extrabold lg:text-3xl">Painel</h1>
          <p className="text-xs lg:text-base">
            As últimas atualizações de hoje
          </p>
        </div>
        <div className="space-x-4 transition-all">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="border-big-gray-100 cursor-pointer rounded-md border-2 p-2 text-sm text-big-gray-300 hover:border-big-gray-200"
          />
          <FontAwesomeIcon
            icon={faBookmark}
            className="border-big-gray-100 cursor-pointer rounded-md border-2 p-2 text-sm text-big-gray-300 hover:border-big-gray-200"
          />
        </div>
      </header>
    </div>
  )
}
