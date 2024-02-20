import React from 'react'

import { Avatar, AvatarImage } from '@/components/ui/avatar'

export const FooterSidebar: React.FC = () => {
  return (
    <div className="flex flex-col items-center ">
      <div className="fixed bottom-4 flex flex-col items-center justify-center">
        <Avatar className="bg-big-gray-100 mb-4 h-14 w-14">
          <AvatarImage src={''} />
        </Avatar>
        <div className="text-sm font-bold text-big-gray-300">
          Usuário de Teste
        </div>
        <p className="text-sm text-big-gray-300">teste@teste.com.br</p>
      </div>
    </div>
  )
}
