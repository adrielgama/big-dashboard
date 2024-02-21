import React from 'react'

import { SectionWithCards } from './sectionWithCards'

interface SheetProps {
  mainTitle: string
  additionalTitle: string
}

export const Sheet: React.FC<SheetProps> = ({ mainTitle, additionalTitle }) => {
  return (
    <div className="hidden space-y-8 p-4 md:block">
      <SectionWithCards title={mainTitle} numberOfCards={3} />
      <SectionWithCards title={additionalTitle} numberOfCards={1} />
    </div>
  )
}
