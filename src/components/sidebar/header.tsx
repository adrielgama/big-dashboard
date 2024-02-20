import React from 'react'

import Logo from '@/assets/logo.svg'
export const Header: React.FC = () => {
  return (
    <div className="flex items-center gap-2 font-extrabold text-big-gray-800">
      <img src={Logo} alt="logo" className="w-10" />
      <a href="#" className="mt-2">
        BigDashboard
      </a>
    </div>
  )
}
