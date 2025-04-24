import styled from 'styled-components'

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 1rem;
`

const Dot = styled.span<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? '#000' : '#ccc')};
`

type IndicatorProps = {
  step: number
  totalSteps: number
}

const Indicator: React.FC<IndicatorProps> = ({ step, totalSteps }) => {
  return (
    <DotsContainer>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <Dot key={index} active={index === step} />
      ))}
    </DotsContainer>
  )
}

export default Indicator
