import React from 'react'

import { Cards } from '@/components/skeletons/cards'
import { Chart } from '@/components/skeletons/chart'
import { Header } from '@/components/skeletons/header'
import { ShortNews } from '@/components/skeletons/shortNews'

export const Panel: React.FC = () => {
  return (
    <div className="h-screen space-y-4 overflow-scroll px-4 lg:container">
      <Header />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Cards />
        <Cards />
      </div>
      <ShortNews />
      <Chart />
    </div>
  )
}
