import { FC } from 'react'

interface IProps {
  color?: string
}

const QuestionnaireIcon: FC<IProps>  = (props) => {
  const { color = '#141515' } = props
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.80147"fillRule="evenodd" clipRule="evenodd" d="M19.999 16.0693C19.8247 18.3889 17.9722 20.1148 15.8638 19.9221L4.1621 19.9198C2.04638 20.1171 0.185543 18.3957 -0.000976562 16.0693V5.77796C0.136223 3.74951 1.59326 2.13586 3.4336 1.97302V3.30225C2.29102 3.47436 1.4209 4.51013 1.35204 5.77796V16.0693C1.354 16.7776 1.65332 17.4468 2.16406 17.8799C2.708 18.3728 3.39306 18.641 4.09814 18.6365H15.7749C17.167 18.7418 18.3789 17.6005 18.5015 16.0693V5.77796C18.4404 4.50781 17.5644 3.46496 16.4199 3.30225V1.97302H16.5859C18.4199 2.13818 19.8701 3.75402 19.999 5.77796V16.0693ZM5.15913 11.3934C4.87153 11.1392 4.82613 10.6782 5.05415 10.3619C5.08589 10.3185 5.12105 10.2795 5.15913 10.2474C5.52486 9.95178 6.02095 9.95178 6.38618 10.2474L8.6147 12.3334L13.2748 8.00098C13.6249 7.67578 14.1347 7.67578 14.4824 8.00098C14.6474 8.12719 14.7446 8.3313 14.7529 8.55115C14.7509 8.77819 14.6518 8.99133 14.4824 9.12427L9.21821 14.0294C8.86128 14.3275 8.36763 14.3275 8.01265 14.0294L5.15913 11.3934ZM6.28271 3.85234C6.28271 4.26958 5.97412 4.60906 5.59522 4.60906C5.2168 4.60906 4.9082 4.26958 4.9082 3.85234V0.643845C4.9082 0.462692 4.98535 0.293016 5.1167 0.185353C5.25195 0.0636458 5.42334 -0.000196535 5.59522 0.0020019C5.94531 -0.0258312 6.25098 0.258592 6.28271 0.643845V3.85234ZM15.2104 3.85234C15.1797 4.23503 14.873 4.51958 14.5244 4.49431C14.1807 4.53325 13.874 4.25823 13.8389 3.8803L13.8369 0.643848C13.8701 0.258593 14.1743 -0.0258303 14.5244 0.00200215C14.873 -0.0258303 15.1797 0.258593 15.2104 0.643848V3.85234ZM12.4653 3.21069H7.65723V1.927H12.4653V3.21069Z" 
        fill={color}
      />
    </svg>
  )
}

export default QuestionnaireIcon
