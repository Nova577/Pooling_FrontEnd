import { FC } from "react"

interface Props {
  color?: string
}

const Minus: FC = (props: Props) => {
  const { color='#888989' } = props

  return (
    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="10" height="10">
      <path d="M64 576h896V448H64z" fill={color} p-id="3338"></path>
    </svg>
  )
}

export default Minus