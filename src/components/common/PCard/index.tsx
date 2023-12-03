import clsx from "clsx"
import { FC, PropsWithChildren, ReactNode } from "react"

interface Props extends PropsWithChildren {
  className?: string
  bodyClass?: string
  title?: ReactNode
}

const PCard: FC<Props> = (props) => {
  const {
    className = '',
    bodyClass = '',
    title,
    children
  } = props

  return (
    <div className={clsx("card rounded-3xl bg-[#DCC8BB]", className)}>
      {
        title
        && (
          <div className="card-title">
            { title }
          </div>
        )
      }
      
      <div className={clsx("card-body", bodyClass)}>
        { children }
      </div>
    </div>
  )
}

export default PCard
