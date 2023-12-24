import styles from './index.module.css'
import clsx from 'clsx'
import { FC, PropsWithChildren } from "react"


interface Props extends PropsWithChildren {
  className?: string
  size?: 'sm' | 'md'
}

const ResetPassword: FC<Props> = (props) => {
  const { children, className, size = "md" } = props

  return (
    <div 
      className={clsx(
        "w-full",
        "h-[300px]", 
        "overflow-y-auto",
        "overflow-x-hidden",
        "pr-[15px]",
        styles.p_scroll_wrap,
        size === 'sm' && styles.p_scroll_bar_sm,
        size === 'md' && styles.p_scroll_bar_md,
        className
      )}
    >
      { children }
    </div>
  )
}

export default ResetPassword
