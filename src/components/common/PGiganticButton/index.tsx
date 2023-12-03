import { FC, PropsWithChildren } from "react"
import PButton from "../PButton"

interface Props extends PropsWithChildren {

}

const PGiganticButton: FC<Props> = (props) => {
  const { children } = props

  return (
    <PButton className="h-[75px] px-8 rounded-full font-bold !text-[32px]">
      <div>
        { children }
      </div>
    </PButton>
  )
}

export default PGiganticButton
