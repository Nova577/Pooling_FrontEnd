import { FC } from "react"

const DefaultTimelineMiddleCircle = () => {
  return (
    <div className="h-[30px] w-[30px] rounded-full bg-white" />
  )
}

interface TimelineItem {
  key: string
  left?: React.ReactNode
  middle?: React.ReactNode
  right?: React.ReactNode
}

interface Props {
  items?: TimelineItem[]
}

const PTimeline: FC<Props> = (props) => {
  const { items } = props

  return (
    <ul className="timeline timeline-vertical">
      {
        items?.map((it, index) => {
          return (
            <li key={it.key}>
              {
                index !== 0 && <hr />
              }

              {
                it.left && <div className="timeline-start mr-[20px]">{ it.left }</div>
              }

              {
                <div className="timeline-middle">{ it.middle ?? <DefaultTimelineMiddleCircle /> }</div>
              }

              {
                it.right && <div className="timeline-end ml-[20px]">{ it.right }</div>
              }

              {
                index !== items.length - 1 && <hr />
              }
            </li>
          )
        })
      }
    </ul>
  )
}

export default PTimeline
