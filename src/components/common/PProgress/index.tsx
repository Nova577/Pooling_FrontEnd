import { FC } from "react";
import { Progress, SlotsToClasses, ProgressSlots } from "@nextui-org/react";
import clsx from "clsx"

interface Props {
  classNames?: SlotsToClasses<ProgressSlots>;
  value?: number;
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full',
}

const PProgress: FC<Props> = (props) => {
  const {
    classNames={},
    value = 0,
    radius = 'sm',
    ...otherProps
  } = props

  return <div className="flex">
    <Progress 
      {...otherProps} 
      value={value}
      classNames={{
        track: clsx('h-[25px]', classNames?.track || 'bg-transparent'),
        indicator: clsx(classNames?.indicator || 'bg-white'),
      }}
      radius={radius}
    />
  </div>
}

export default PProgress