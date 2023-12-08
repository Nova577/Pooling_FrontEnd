import { FC, useId } from "react"

interface PRadioGroupProps {
  options?: {
    label: string
    value: string
  }[]
  // type: 'default' | 'button'
}

const initOptions: PRadioGroupProps['options'] = []

const PRadioGroup: FC<PRadioGroupProps> = (props) => {
  const {
    options = initOptions,
    // type = 'button'
  } = props

  const componentId = useId()

  return (
    <div className="join h-[60px] flex-1 rounded-3xl font-playfair bg-white opacity-60">
      {
        options.map((it) => {
          return (
            <input
              key={it.value}
              className="
                join-item btn btn-lg box-border h-[3.75rem] min-h-[unset] flex-1 !bg-transparent border-[1px transparent]
                hover:border hover:border-black hover:active:transform-none
                active:border-black
              "
              type="radio"
              name={componentId}
              aria-label={it.label}
            />
          )
        })
      }
    </div>
  )
}

export default PRadioGroup
