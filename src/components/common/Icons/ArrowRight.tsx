import { FC } from "react"

interface Props {
  className?: string
}

const ArrowRight: FC<Props> = (props) => {
  const { className } = props

  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M25 0C38.8071 0 50 11.1929 50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0Z" />
      <path d="M25.2871 13L37 25L25.2871 37" stroke="#DCC8BB" stroke-width="0.925266"/>
      <path d="M13 25H37" stroke="#DCC8BB" stroke-width="0.925266"/>
    </svg>
  )
}

export default ArrowRight
