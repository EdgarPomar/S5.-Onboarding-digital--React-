// src/components/Card.tsx
import React from 'react'

type CardProps = {
  title: string
  description: string
}

const Card: React.FC<CardProps> = ({ title, description }) => (
  <div>
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
)

export default Card
