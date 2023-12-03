import { FC } from "react"

interface Props {
  className?: string
}

const ArrowLeft: FC<Props> = (props) => {
  const { className } = props

  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
      <path d="M24.7129 13L13 25L24.7129 37" stroke="#DCC8BB" stroke-width="0.925266"/>
      <path d="M37 25L13 25" stroke="#DCC8BB" stroke-width="0.925266"/>
    </svg>
  )
}

export default ArrowLeft
