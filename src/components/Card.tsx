import React from 'react'
import {
  CardContainer, ImageSection, StyledImage,
  ContentSection, Title, Description,
  Footer, Dots, NextButton
} from './Card.styles'

type CardProps = {
  title: string
  description: string
  image: string
  step: number
  totalSteps: number
  onNext: () => void
}

const Card: React.FC<CardProps> = ({ title, description, image, step, totalSteps, onNext }) => {
  return (
    <CardContainer>
      <ImageSection>
        <StyledImage src={image} alt="Onboarding" />
      </ImageSection>
      <ContentSection>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </ContentSection>
      <Footer>
        <Dots>
          {Array.from({ length: totalSteps }).map((_, i) => (
            <span key={i} className={i === step ? 'active' : ''}></span>
          ))}
        </Dots>
        <NextButton onClick={onNext}>→</NextButton>
      </Footer>
    </CardContainer>
  )
}

export default Card
