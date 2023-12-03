import { FC } from "react"

interface Props {
  label?: string
}
const PSelect: FC<Props> = (props) => {
  const { label } = props

  return (
    <div className="flex-1 relative">
      <select className="select h-[60px] w-full flex-1 pt-4 pl-[30px] rounded-[1.25rem] font-playfair bg-white opacity-60 border-none !outline-0">
        <option disabled selected> test</option>
        <option> test2</option>
      </select>

      {
        label
        && (
          <label className="absolute left-[20px] top-[5px] opacity-50 text-neutral-900 text-sm font-bold font-playfair leading-[18.66px]">{ label }</label>
        )
      }
    </div>

  )
}

export default PSelect
