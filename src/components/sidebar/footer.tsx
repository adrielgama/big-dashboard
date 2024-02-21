import React from 'react'

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

interface FooterSidebarProps {
  userImage?: string
  name: string
  email: string
}

export const FooterSidebar: React.FC<FooterSidebarProps> = ({
  userImage,
  name,
  email,
}) => {
  const [firstName, ...restOfName] = name.split(' ')
  const lastName = restOfName.pop() || ''

  const nameFallback = `${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`

  return (
    <div className="flex flex-col items-center ">
      <div className="fixed bottom-4 flex flex-col items-center justify-center">
        <Avatar className="mb-4 h-14 w-14 bg-big-gray-100">
          <AvatarImage src={userImage} />
          <AvatarFallback className="bg-transparent text-big-gray-300">
            {nameFallback}
          </AvatarFallback>
        </Avatar>
        <div className="text-sm font-bold text-big-gray-300">{name}</div>
        <p className="text-sm text-big-gray-300">{email}</p>
      </div>
    </div>
  )
}
