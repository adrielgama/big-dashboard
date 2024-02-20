import React from 'react'

import { Skeleton } from '../ui/skeleton'

export const Cards: React.FC = () => {
  return (
    <div className="rounded-md bg-big-gray-200 p-6">
      <div className="space-y-2">
        <Skeleton className="h-4 w-[150px] rounded-xl" />
        <Skeleton className="h-4 w-[250px] rounded-xl" />
        <Skeleton className="h-4 w-[250px] rounded-xl" />
      </div>
    </div>
  )
}
