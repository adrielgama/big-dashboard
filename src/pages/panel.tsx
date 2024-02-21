import React from 'react'

import { Cards } from '@/components/skeletons/cards'
import { Chart } from '@/components/skeletons/chart'
import { Header } from '@/components/skeletons/header'
import { ShortNews } from '@/components/skeletons/shortNews'

interface PanelProps {
  title: string
  subtitle: string
}

export const Panel: React.FC<PanelProps> = ({ title, subtitle }) => {
  return (
    <div className="h-screen w-full space-y-4 overflow-scroll px-4 lg:container">
      <Header title={title} subtitle={subtitle} />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Cards />
        <Cards />
      </div>
      <ShortNews />
      <Chart />
    </div>
  )
}
