import clsx from "clsx"
import { FC, PropsWithChildren, ReactNode } from "react"

interface Props extends PropsWithChildren {
  className?: string
  bodyClass?: string
  title?: ReactNode

  onClick?: () => void
}

const PCard: FC<Props> = (props) => {
  const {
    className = '',
    bodyClass = '',
    title,
    children,

    onClick
  } = props

  return (
    <div className={clsx("card rounded-3xl bg-opacity-60 bg-[#DDC9BC]", className)} onClick={onClick}>
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
