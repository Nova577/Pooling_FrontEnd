import { FC } from "react"

interface Props {
  imgSrc?: string
}

const PAvatar: FC<Props> = (props) => {
  const { imgSrc } = props

  return (
    <div className="avatar">
      <div className="w-[130px] rounded-full">
        <img src={imgSrc} />
      </div>
    </div>
  )
}

export default PAvatar
