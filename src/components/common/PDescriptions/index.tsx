import { FC } from "react"

interface Props {
  items?: {
    key: string
    label: React.ReactNode
    children: React.ReactNode
  }[]
}

const PDescriptions: FC<Props> = (props) => {
  const {
    items
  } = props

  return (
    <div className="flex flex-col gap-2">
      {
        items?.map((it) => {
          return (
            <div key={it.key} className="flex items-center gap-2">
              <div>
                { it.label }
              </div>

              <div className="text-neutral-900 text-[7px] font-normal">
                { it.children }
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default PDescriptions
