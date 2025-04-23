// src/App.tsx
import { useState } from 'react'
import Card from './components/Card'

type TutorialStep = {
  title: string
  description: string
}

const App: React.FC = () => {
  const tutorialData: TutorialStep[] = [
    {
      title: 'Pas 1: Crear component Card',
      description: 'Aquest component mostrarà informació d\'un pas del tutorial.'
    },
    {
      title: 'Pas 2: Carregar el component Card',
      description: 'El component App carregarà el component Card amb les dades.'
    }
  ]

  const [currentStep, setCurrentStep] = useState(0)

  return (
    <div>
      <Card
        title={tutorialData[currentStep].title}
        description={tutorialData[currentStep].description}
      />
    </div>
  )
}

export default App
