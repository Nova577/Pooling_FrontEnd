import { FC } from "react"

interface Props {
  items?: {
    label: string
  }[]
}

const PMenu: FC<Props> = (props) => {
  const { items } = props

  return (
    <ul className="menu">
      {
        items.map(it => {
          return (
            <li key={it.label}>
              <div>
                { it.label }
              </div>
            </li>
          )
        })
      }
    </ul>
  )
}

export default PMenu
