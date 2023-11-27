import React, { useState, useEffect } from 'react'
import styles from './Welcome.module.scss'




const logo = require('../../assets/back_logo.png')



function Welcome () {
  const [countDown, setCountDown] = useState(10)

  useEffect(() => {
    // 每秒更新倒计时数值
    const timer = setInterval(() => {
      setCountDown(prevCountDown => (prevCountDown === 0 ? 10 : prevCountDown - 1))
    }, 1000)

    return () => {
      clearInterval(timer) // 清除定时器
    }
  }, [])

  return (
    <div>
      <div className={styles.Welcome}>
        <div className={styles.WelcomeTitle}>Welcome to Pooling， your go to sampling platform that will be live in</div>
        <div className={styles.WelcomeCountDown}>{countDown}</div>
        <div className={styles.WelcomeMessage}>
          <span>Your Account:</span>
          <span style={{ textDecoration: 'underline' }}>support@pooling.tools</span>
        </div>
        <div className={styles.WelcomeTips}>
          You will receive an email notification when the platform goes live. Thank you for the support.
        </div>
        <img src={logo} className={styles.WelcomeImg}></img>
      </div>
    </div>
  )
}

export default Welcome
