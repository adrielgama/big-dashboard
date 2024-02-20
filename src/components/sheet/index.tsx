import React from 'react'

import { Cards } from '../skeletons/cards'

export const Sheet: React.FC = () => {
  return (
    <div className="hidden space-y-6 p-4 lg:block">
      <h1 className="font-bold">Tarefas de hoje</h1>
      <div className="space-y-2 ">
        <Cards />
        <Cards />
        <Cards />
      </div>

      <h1 className="font-bold">Projetos recentes</h1>
      <div>
        <Cards />
      </div>
    </div>
  )
}
