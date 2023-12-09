import { FC } from "react";
import clsx from "clsx";

interface Props extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type'> {
  type?: 'text' | 'password'
  label?: string
}

const PInput: FC<Props> = (props) => {
  const { 
    className,
    type = 'text',
    label = '',
     ...otherProps
    } = props

  return (
    <div className="relative w-full flex flex-1">
      <input
        className={clsx(
          'input h-[60px] w-full flex-1 pt-4 pl-[30px] rounded-[1.25rem] font-playfair bg-white opacity-60 border-none !outline-0',
          'focus:border focus:border-solid focus:border-[#A6A29F]',
          className
        )}
        type={type}
        {...otherProps}
      />

      {
        label
        && (
          <label className="absolute left-[20px] top-[5px] opacity-50 text-neutral-900 text-sm font-bold font-playfair leading-[18px]">
            { label }
          </label>
        )
      }
    </div>
   
  )
}

export default PInput
