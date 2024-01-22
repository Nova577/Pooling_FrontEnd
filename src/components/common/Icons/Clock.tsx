import { FC } from "react"

interface IProps {
  color?: string
  w?: string
  h?: string
}

const Clock: FC<IProps> = (props) => {
  const {
    color = '3F3D3C',
    w = 25,
    h = 25,
  } = props

  return (
    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4307" width={w} height={h}>
      <path d="M512 1024a512 512 0 1 1 512-512 512.576 512.576 0 0 1-512 512z m0-960a448 448 0 1 0 448 448A448.512 448.512 0 0 0 512 64z m224 480h-224a32 32 0 0 1-32-32V224a32 32 0 0 1 64 0v256h192a32 32 0 0 1 0 64z" fill={color} p-id="4308"></path>
    </svg>
  )
}

export default Clock