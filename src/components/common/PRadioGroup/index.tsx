import {RadioGroup, useRadio, VisuallyHidden, cn} from "@nextui-org/react";
import { FC, Fragment } from "react";
import styles from './index.module.css'

const PRadioGroupItem = (props: Parameters<typeof useRadio>[0]) => {
  const {
    Component,
    children,
    getBaseProps,
    getInputProps,
    getLabelProps,
    getLabelWrapperProps,
  } = useRadio(props);

  return (
    <Component
      {...getBaseProps()}
      className={cn(
        "flex-1 h-[3.75rem] inline-flex items-center relative justify-center border border-transparent",
        "cursor-pointer border-default",
        'first:rounded-l-2xl last:rounded-r-2xl',
        "data-[selected=true]:border data-[selected=true]:border-[#707070] data-[selected=true]:bg-white",
        styles.p_radio_group__item
      )}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>

      <div {...getLabelWrapperProps()} className="ml-0">
        {
          children
          && (
            <span {...getLabelProps()} className="text-neutral-900 text-[17px] text-center font-normal font-playfair leading-snug opacity-60">
              { children }
            </span>
          ) 
        }
      </div>
    </Component>
  );
};

interface PRadioGroupProps {
  items?: string[]
}

const PRadioGroup: FC<PRadioGroupProps> = (props) => {
  const { items } = props;

  return (
    <RadioGroup
      classNames={{
        base: 'flex-1 inline-flex bg-[#F6F2EF] rounded-2xl',
        wrapper: 'gap-0'
      }}
      orientation="horizontal"
    >
      {
        items?.map((it) => {
          return (
            <PRadioGroupItem key={it} value={it}>{ it }</PRadioGroupItem>
          )
        })
      }
    </RadioGroup>
  )
}

export default PRadioGroup
