import styled from 'styled-components'

type Props = {
  totalSteps: number
  currentStep: number
  onDotClick: (index: number) => void
}

const Indicator: React.FC<Props> = ({ totalSteps, currentStep, onDotClick }) => {
  return (
    <>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <Dot
          key={index}
          active={index === currentStep}
          onClick={() => onDotClick(index)}
        />
      ))}
    </>
  )
}

export default Indicator

const Dot = styled.span<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? '#000' : '#ccc')};
  cursor: pointer;
  transition: background-color 0.3s;
`
