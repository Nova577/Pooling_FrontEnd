import { FC, PropsWithChildren } from "react"

interface Props extends PropsWithChildren {

}

const PTitle: FC<Props> = (props) => {
  const { children } = props

  return (
    <h2 className="opacity-50 text-neutral-900 text-[23px] font-bold font-playfair leading-[30.66px]">
      { children }
    </h2>
  )
}

export default PTitle

