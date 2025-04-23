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
    },
    {
      title: 'Pas 3: Afegir navegació',
      description: 'Ara l\'usuari pot navegar pels diferents passos del tutorial.'
    }
  ]

  const [step, setStep] = useState(0)

  // Funció per passar al següent pas
  const nextStep = () => {
    if (step < tutorialData.length - 1) {
      setStep(step + 1)
    }
  }

  return (
    <div>
      <Card
        title={tutorialData[step].title}
        description={tutorialData[step].description}
        onNext={nextStep}
        isLast={step === tutorialData.length - 1}
      />
    </div>
  )
}

export default App
