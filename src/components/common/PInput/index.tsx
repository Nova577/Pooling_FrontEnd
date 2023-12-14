import React, { forwardRef } from "react";
import clsx from "clsx";
import styles from './index.module.css'

interface Props extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type' | 'size' | 'prefix'> {
  type?: 'text' | 'password'
  label?: string
  size?: 'md' | 'sm' | 'xs'
  prefix?: React.ReactNode
}

const PInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { 
    className,
    type = 'text',
    label = '',
    size = 'md',
     ...otherProps
    } = props

  return (
    <div className="relative w-full flex flex-1">
      <input
        ref={ref}
        className={clsx(
          'input h-[60px] w-full flex-1 pl-[30px] rounded-[1.25rem] font-playfair bg-[#F6F2EF] border-none !outline-0',
          'focus:border focus:border-solid focus:border-[#A6A29F]',
          label && ['pt-4'],
          size === 'sm' && ['input-sm'],
          size === 'xs' && ['input-xs'],
          styles.p_input,
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
})

export default PInput
