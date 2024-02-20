import React from 'react'

import { Skeleton } from '../ui/skeleton'

export const ShortNews: React.FC = () => {
  return (
    <div className="max-h-16 rounded-md bg-big-gray-200 p-6">
      <div className="flex flex-row space-x-3">
        <Skeleton className="h-4 w-[100px] rounded-xl" />
        <Skeleton className="h-4 w-[100px] rounded-xl" />
        <Skeleton className="hidden h-4 w-[150px] rounded-xl lg:block" />
        <Skeleton className="hidden h-4 w-[160px] rounded-xl lg:block" />
        <Skeleton className="hidden h-4 w-[180px] rounded-xl lg:block" />
      </div>
    </div>
  )
}
