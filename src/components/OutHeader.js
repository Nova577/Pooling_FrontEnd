import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Components.module.scss'




function OutHeader () {
  const logo = require('../assets/logo.png')
  const navigate = useNavigate()

  return (
    <div className={styles.header}>
      <img src={logo} className={styles.image}></img>
      <div className={styles.headerList}>
        <span className={styles.headerItem + ' ' + styles.active} onClick={() => {
          localStorage.removeItem('sign')
          navigate('/home')
        }}>Sign up</span>
      </div>
    </div>
  )
}

export default OutHeader