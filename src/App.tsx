import { useState } from 'react'
import Card from './components/Card'
import meditation from './assets/meditation.svg'
import programming from './assets/programming.svg'
import time_management from './assets/time_managment.svg'

type TutorialStep = {
  title: string
  description: string
  image: string
}

const App: React.FC = () => {
  const tutorialData: TutorialStep[] = [
    {
      title: 'Pas 1: Crear component Card',
      description: 'Aquest component mostrarà informació d\'un pas del tutorial.',
      image: meditation
    },
    {
      title: 'Pas 2: Carregar el component Card',
      description: 'El component App carregarà el component Card amb les dades.',
      image: programming
    },
    {
      title: 'Pas 3: Afegir navegació',
      description: 'Ara l\'usuari pot navegar pels diferents passos del tutorial.',
      image: time_management
    }
  ]

  const [step, setStep] = useState(0)

  const nextStep = () => {
    if (step < tutorialData.length - 1) setStep(step + 1)
  }

  const prevStep = () => {
    if (step > 0) setStep(step - 1)
  }

  const goToStep = (index: number) => {
    setStep(index)
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f0f0f0'
    }}>
      <Card
        title={tutorialData[step].title}
        description={tutorialData[step].description}
        image={tutorialData[step].image}
        step={step}
        totalSteps={tutorialData.length}
        onNext={nextStep}
        onPrev={prevStep}
        onDotClick={goToStep}
      />
    </div>
  )
}

export default App
