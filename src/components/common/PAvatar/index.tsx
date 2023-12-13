import { FC } from "react"
import clsx from 'clsx'

interface Props {
  imgSrc?: string;
  className?: string
}

const PAvatar: FC<Props> = (props) => {
  const { imgSrc, className } = props

  return (
    <div 
      className={
        clsx(
          'avatar',
          'w-[130px]',
          className
        )
      }
    >
      <div className="w-full rounded-full">
        <img src={imgSrc} />
      </div>
    </div>
  )
}

export default PAvatar
