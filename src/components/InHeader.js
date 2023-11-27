import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Components.module.scss'


function InHeader () {
  const logo = require('../assets/logo.png')
  const navigate = useNavigate()

  const [data, setData] = useState({
    list: [
      { id: 1, name: 'Home' },
      { id: 2, name: 'Sign in' },
      { id: 3, name: 'Sign up' },
    ],
    active: 'Sign up',
  })

  function ChangeActive (id) {
    if (id === 1) {
      navigate('/')
    } else if (id === 2) {
      navigate('/login')
    }
  }

  return (
    <div className={styles.header}>
      <img src={logo} className={styles.image}></img>
      <div className={styles.headerList}>
        {data.list.map(item => (
          <span
            className={item.name === data.active ? `${styles.headerItem} ${styles.active}` : styles.headerItem}
            key={item.id}
            onClick={() => ChangeActive(item.id)}
          >
            {item.name}
          </span>
        ))}
      </div>
    </div>
  )
}

export default InHeader