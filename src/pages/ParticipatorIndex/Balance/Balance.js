import styles from './Balance.module.scss'
import { DatePicker } from 'antd'
import { useState, useEffect } from 'react'
import './Balance.css'


function Balance () {
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

  const handleBalanceCenterCalendarClick = () => {
    setIsDatePickerOpen(true)
  }


  return (
    <div className={styles.Balance}>
      <div className={styles.BalanceTop}>
        <div className={styles.BalanceTopLeft}>$118.<span style={{ display: 'block', marginTop: '0.03125rem' }}>4</span>0</div>
        <div className={styles.BalanceTopRight}>Withdraw</div>
      </div>
      <div className={styles.BalanceCenter}>
        <div>
          <div className={styles.BalanceCenterCalendar} onClick={handleBalanceCenterCalendarClick}
            tabIndex={0}>
            {month}&nbsp;{year}
          </div>
          <DatePicker onChange={DateonChange} bordered={false} picker="month" open={isDatePickerOpen} />
        </div>
        <div className={styles.BalanceCenterRight}>
          <div className={styles.BalanceCenterRightUnit}>$</div>
          <div className={styles.BalanceCenterRightNumber}>
            85.77
          </div>
        </div>
      </div>
      <div className={styles.BalanceList}>
        {[...Array(20)].map((_, index) => (
          <div className={styles.BalanceItem} key={index}>
            <div className={styles.BalanceItemName}>Sugar Consumption Research</div>
            <div className={styles.BalanceItemNumber}>
              <div style={{ marginRight: '0.046875rem' }}>+$</div>
              <div>47.35</div>
            </div>
          </div>
        ))}
      </div>
    </div >
  )
}
export default Balance