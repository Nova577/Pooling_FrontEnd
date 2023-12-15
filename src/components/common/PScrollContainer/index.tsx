import styles from './index.module.css'
import clsx from 'clsx'
import { FC, PropsWithChildren } from "react"


interface Props extends PropsWithChildren {
  className?: string
}

const ResetPassword: FC<Props> = (props) => {
  const { children, className } = props

  return (
    <div className="flex justify-center">
          <div 
            className={clsx(
              "w-full",
              "h-[300px]", 
              "overflow-y-auto",
              "pr-[15px]",
              styles.p_scrollwrap,
              className
            )}
          >
            { children }
          </div>
    </div>
  )
}

export default ResetPassword
