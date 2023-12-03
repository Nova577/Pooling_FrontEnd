import { FC, PropsWithChildren } from "react"
import clsx from 'clsx'

interface Props extends PropsWithChildren {
  className?: string
}
const FormRow: FC<Props> = (props) => {
  const { children, className } = props

  return (
    <div className={clsx("pt-[25px] gap-5", className)}>
      <div>
        
      </div>

      <div className="flex gap-5">
        { children }
      </div>
    </div>
  )
}

export default FormRow
