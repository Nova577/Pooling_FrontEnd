import { CSSProperties, FC } from "react"
import clsx from 'clsx'

export interface PButtonProps extends Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'type'> {
  style?: CSSProperties
  className?: string
  type?: 'default' | 'ghost' | 'primary'
  size?: 'md' | 'lg'
}

const PButton: FC<PButtonProps> = (props) => {
  const {
    className,
    style,
    type = 'default',
    size = 'md',
    children,
    ...otherProps
  } = props

  return (
    <button
      className={
        clsx(
          'btn',
          'min-h-[27px]',
          'text-xs',
          'font-playfair',
          {
            'btn-primary': type === 'primary',
            'btn-ghost': type === 'ghost',
            'h-[27px]': size === 'md',
            'btn-lg': size === 'lg'
          },
          className
        )
      }
      style={style}
      {...otherProps}
    >
      { children }
    </button>
  )
}

export default PButton
