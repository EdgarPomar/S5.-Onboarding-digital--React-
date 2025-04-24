import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 100%;
  max-width: 360px;
  margin: 2rem auto;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
`

export const ImageSection = styled.div`
  background-color: #3ba6a4;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 280px;
`

export const StyledImage = styled.img`
  width: 180px;
  height: auto;
`

export const ContentSection = styled.div`
  padding: 1.5rem;
  text-align: center;
`

export const Title = styled.h2`
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`

export const Description = styled.p`
  font-size: 0.9rem;
  color: #444;
  line-height: 1.4;
`

export const Footer = styled.div`
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Dots = styled.div`
  display: flex;
  gap: 6px;

  span {
    width: 6px;
    height: 6px;
    background-color: #ccc;
    border-radius: 50%;

    &.active {
      background-color: #000;
    }
  }
`

export const NextButton = styled.button`
  background-color: #000;
  color: #fff;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  cursor: pointer;
`

export const PrevButton = styled(NextButton)`
  background-color: #ccc;
  color: #000;
`
