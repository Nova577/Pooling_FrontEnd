import { FC, PropsWithChildren } from "react"
import clsx from 'clsx'

interface Props extends PropsWithChildren {
  className?: string
  label?: string
}
const FormRow: FC<Props> = (props) => {
  const { children, className, label } = props

  return (
    <div className={clsx("relative pt-[25px] gap-5", className)}>
      {
        label
        && (
        <div className="absolute top-[5px]">
          <span className="text-[#827F7C] text-[13px] font-bold font-playfair leading-[18px]">
          { label }
          </span>
        </div>
        )
      }

      <div className="flex gap-5">
        { children }
      </div>
    </div>
  )
}

export default FormRow
