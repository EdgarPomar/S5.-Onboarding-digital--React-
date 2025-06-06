import React from 'react'
import {
  CardContainer, ImageSection, StyledImage,
  ContentSection, Title, Description,
  Footer, Dots, NextButton, PrevButton
} from './Card.styles'
import Indicator from './Indicator'

type CardProps = {
  title: string
  description: string
  image: string
  step: number
  totalSteps: number
  onNext: () => void
  onPrev: () => void
  onDotClick: (index: number) => void
}

const Card: React.FC<CardProps> = ({
  title, description, image, step,
  totalSteps, onNext, onPrev, onDotClick
}) => {
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
        {step > 0 ? (
          <PrevButton onClick={onPrev}>←</PrevButton>
        ) : (
          <div style={{ width: '40px' }} />
        )}

        <Dots>
          <Indicator totalSteps={totalSteps} currentStep={step} onDotClick={onDotClick} />
        </Dots>

        {step < totalSteps - 1 ? (
          <NextButton onClick={onNext}>→</NextButton>
        ) : (
          <div style={{ width: '40px' }} />
        )}
      </Footer>
    </CardContainer>
  )
}

export default Card
