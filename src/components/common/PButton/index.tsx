import { CSSProperties, FC } from "react"
import clsx from 'clsx'

export interface PButtonProps extends Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'styleType'> {
  style?: CSSProperties
  className?: string
  styleType?: 'default' | 'ghost' | 'primary' | 'neutral'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'

  squareRound?: boolean
  round?: boolean
  isLoading?: boolean
}

const PButton: FC<PButtonProps> = (props) => {
  const {
    className,
    style,
    styleType = 'default',
    size = 'md',
    round = false,
    squareRound = false,
    children,
    ...otherProps
  } = props


  return (
    <button
      className={
        clsx(
          'btn',
          'font-bold',
          'font-playfair',
          size === 'xs' && ['btn-xs', 'text-xs'],
          size === 'sm' && ['btn-sm'],
          size === 'xl' && ['h-[4.5rem]', 'px-8', 'text-[2rem]'],
          size === 'lg' && ['btn-lg'],
          styleType === 'default' && ['bg-white'],
          styleType === 'primary' && ['btn-primary'],
          styleType === 'ghost' && ['btn-ghost'],
          styleType === 'neutral' && ['btn-neutral, bg-neutral-900', 'text-white', 'hover:bg-neutral-900'],
          {
            'rounded-full': round,
            'rounded-[1.25rem]': squareRound,
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
