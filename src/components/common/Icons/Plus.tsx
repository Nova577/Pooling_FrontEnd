import { FC } from "react"

interface Props {
  color?: string
}

const Plus: FC = (props: Props) => {
  const { color='#888989' } = props

  return (
    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="10" height="10">
      <path d="M576 64H448v384H64v128h384v384h128V576h384V448H576z" fill={color} p-id="2368"></path>
    </svg>
  )
}

export default Plus
