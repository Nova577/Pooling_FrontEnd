import { FC } from "react"

interface Props {
  className?: string
}

const ArrowUpRight: FC<Props> = (props) => {
  const { className } = props

  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
      <path d="M1.73242 1H16V15.2675" stroke="white" stroke-width="0.490947"/>
      <path d="M1 16L16 1" stroke="white" stroke-width="0.490947"/>
    </svg>
  )
}

export default ArrowUpRight
