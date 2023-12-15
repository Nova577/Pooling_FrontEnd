import { FC } from "react"

interface Props {
  className?: string
}

const ArrowLeftSimple: FC<Props> = (props) => {
  const { className } = props

  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="12" height="21" viewBox="0 0 12 21" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M9.76367 0.554199L11.3291 2.14258L3.16015 10.3118L11.3291 18.4812L9.76367 20.0471L0.00585938 10.3118L9.76367 0.554199Z" fill="#333333"/>
    </svg>
  )
}

export default ArrowLeftSimple
