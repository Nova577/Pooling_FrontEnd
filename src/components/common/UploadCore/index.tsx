import { FC } from "react"

interface Props {
  trigger: React.ReactNode
}

const UploadCore: FC<Props> = (props) => {
  const { trigger } = props

  const handleClick = () => {

  }
  
  return (
    <div onClick={handleClick}>
      { trigger }
    </div>
  )
}

export default UploadCore
