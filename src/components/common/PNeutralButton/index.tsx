import { FC } from "react";
import PButton, { PButtonProps } from "../PButton";
import clsx from 'clsx'

interface Props extends PButtonProps {

}

const PNeutralButton: FC<Props> = (props) => {
  const { children, className, ...otherProps } = props

  return (
    <PButton className={clsx('h-[42px] rounded-full bg-neutral-900 text-white !text-[21px] opacity-100', className)} {...otherProps}>
      { children }
    </PButton>
  )
}

export default PNeutralButton
