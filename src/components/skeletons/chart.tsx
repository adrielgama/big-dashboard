import React from 'react'

import { Skeleton } from '../ui/skeleton'

export const Chart: React.FC = () => {
  return (
    <div className="min-h-72 rounded-md bg-big-gray-200 p-6">
      <div className="flex flex-col space-y-3">
        <div className="space-y-2">
          <Skeleton className="h-4 w-[150px] rounded-xl" />
          <Skeleton className="h-4 w-[250px] rounded-xl" />
          <Skeleton className="h-4 w-[250px] rounded-xl" />
        </div>
      </div>
    </div>
  )
}
