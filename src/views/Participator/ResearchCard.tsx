import { FC } from "react"

interface Props {
  imgSrc?: string
  title?: string
  tags?: string[]
  school?: string
  status?: string
  time?: string
  fee?: string
}

const ResearchCard: FC<Props> = (props) => {
  const {
    fee,
    imgSrc,
    school,
    status,
    tags,
    time,
    title
  } = props

  return (
    <div className=" flex bg-gray-400" style={{ flexBasis: '50%' }}>
      <div>
        <img src={imgSrc} />
      </div>

      <div>
        <div>
          { title }
        </div>

        <div>
          { 
            tags?.map(it => {
              return (
                <div className="badge">
                  { it }
                </div>
              )
            })
          }
        </div>

        <div>
          <div>{ school }</div>
          <div>{ status }</div>
          <div>{ time }</div>
          <div>{ fee }</div>
        </div>
      </div>
    </div>
  )
}

export default ResearchCard
