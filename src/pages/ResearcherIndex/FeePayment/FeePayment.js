import styles from './FeePayment.module.scss'
import { DatePicker } from 'antd'
import { useState, useEffect } from 'react'
import './FeePayment.css'


function FeePayment () {
  const [year, setYear] = useState('')
  const [month, setMonth] = useState('')
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)

  const getMonthName = (monthNum) => {
    let monthName = ''
    switch (monthNum) {
      case 1:
        monthName = 'Jan'
        break
      case 2:
        monthName = 'Feb'
        break
      case 3:
        monthName = 'Mar'
        break
      case 4:
        monthName = 'Apr'
        break
      case 5:
        monthName = 'May'
        break
      case 6:
        monthName = 'Jun'
        break
      case 7:
        monthName = 'Jul'
        break
      case 8:
        monthName = 'Aug'
        break
      case 9:
        monthName = 'Sep'
        break
      case 10:
        monthName = 'Oct'
        break
      case 11:
        monthName = 'Nov'
        break
      case 12:
        monthName = 'Dec'
        break
      default:
        break
    }

    return monthName
  }
  useEffect(() => {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    const currentMonth = currentDate.getMonth() + 1

    setYear(currentYear.toString())
    setMonth(getMonthName(currentMonth))
  }, [])


  const DateonChange = (date, dateString) => {
    const [yearStr, monthStr] = dateString.split('-')
    const monthNum = parseInt(monthStr)
    setIsDatePickerOpen(false)
    setYear(yearStr)
    setMonth(getMonthName(monthNum))
  }

  const handleFeePaymentCenterCalendarClick = () => {
    setIsDatePickerOpen(true)
  }


  return (
    <div className={styles.FeePayment}>
      <div className={styles.FeePaymentFirst}>
        <div className={styles.FeePaymentFirstLeft}>Payment Methods</div>
        <div className={styles.FeePaymentFirstRight}>Add New</div>
      </div>
      <div className={styles.FeePaymentSecondItem} style={{ marginTop: '0.2083rem' }}>
        <div className={styles.FeePaymentSecondItemLeft}>
          <span className={styles.FeePaymentSecondItemLeftTitle}>Visa</span>
          <span className={styles.FeePaymentSecondItemLeftContent}>7657  9878  8678  9878</span>
        </div>
        <div className={styles.FeePaymentSecondItemRightButton}>Delete</div>
      </div>

      <div className={styles.FeePaymentSecondItem}>
        <div className={styles.FeePaymentSecondItemLeft}>
          <span className={styles.FeePaymentSecondItemLeftTitle}>Master</span>
          <span className={styles.FeePaymentSecondItemLeftContent}>7657  9878  8678  9878</span>
        </div>
        <div className={styles.FeePaymentSecondItemRightButton}>Delete</div>
      </div>
      <div className={styles.FeePaymentCenter}>
        <div>
          <div className={styles.FeePaymentCenterCalendar} onClick={handleFeePaymentCenterCalendarClick}
            tabIndex={0}>
            {month}&nbsp;{year}
          </div>
          <DatePicker onChange={DateonChange} bordered={false} picker="month" open={isDatePickerOpen} />
        </div>
        <div className={styles.FeePaymentCenterRight}>
          <div className={styles.FeePaymentCenterRightUnit}>$</div>
          <div className={styles.FeePaymentCenterRightNumber}>
            85.77
          </div>
        </div>
      </div>
      <div className={styles.FeePaymentList}>
        {[...Array(20)].map((_, index) => (
          <div className={styles.FeePaymentItem} key={index}>
            <div className={styles.FeePaymentItemName}>Sugar Consumption Research</div>
            <div className={styles.FeePaymentItemNumber}>
              <div style={{ marginRight: '0.046875rem' }}>+$</div>
              <div>47.35</div>
            </div>
          </div>
        ))}
      </div>
    </div >
  )
}
export default FeePayment