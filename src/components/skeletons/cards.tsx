import React from 'react'

import { useSidebarContext } from '@/context/SidebarContext'

import { Skeleton } from '../ui/skeleton'

export const Cards: React.FC = () => {
  const { isOpen } = useSidebarContext()
  return (
    <div className="rounded-md bg-big-gray-200 p-6">
      <div className="space-y-2">
        <Skeleton
          className={`h-4 w-[150px] ${isOpen ? 'lg:w-[100px]' : 'lg:w-[150px]'} rounded-xl xl:w-[150px]`}
        />
        <Skeleton
          className={`h-4 w-[200px] ${isOpen ? 'lg:w-[150px]' : 'lg:w-[180px]'} rounded-xl xl:w-[200px]`}
        />
        <Skeleton
          className={`h-4 w-[200px] ${isOpen ? 'lg:w-[150px]' : 'lg:w-[180px]'} rounded-xl xl:w-[200px]`}
        />
      </div>
    </div>
  )
}
