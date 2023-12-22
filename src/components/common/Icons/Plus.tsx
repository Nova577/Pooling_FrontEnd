import { FC } from "react"

interface Props {
  color?: string
}

const Plus: FC = (props: Props) => {
  const { color='#888989' } = props

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path 
        fill-rule="evenodd" 
        clip-rule="evenodd" d="M5.1792 6.91163H0.765137V5.05419H5.1792V0.620117H7.17651V5.05419H11.5903V6.91163H7.17651V11.3657H5.1792V6.91163V6.91163Z" 
        fill={color}
      />
    </svg>
  )
}

export default Plus
