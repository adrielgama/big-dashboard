import React from 'react'

import { Cards } from '../skeletons/cards'

interface SectionWithCardsProps {
  title: string
  numberOfCards: number
}

export const SectionWithCards: React.FC<SectionWithCardsProps> = ({
  title,
  numberOfCards,
}) => (
  <div className="space-y-2">
    <h1 className="font-bold">{title}</h1>
    {Array.from({ length: numberOfCards }).map((_, index) => (
      <Cards key={index} />
    ))}
  </div>
)
