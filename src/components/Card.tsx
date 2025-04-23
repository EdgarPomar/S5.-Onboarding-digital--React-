type CardProps = {
  title: string
  description: string
  onNext: () => void
  isLast: boolean
}

const Card: React.FC<CardProps> = ({ title, description, onNext, isLast }) => (
  <div>
    <h2>{title}</h2>
    <p>{description}</p>
    <button onClick={onNext} disabled={isLast}>
      {isLast ? 'Finalitzat' : 'Següent'}
    </button>
  </div>
)

export default Card
