import styles from './ParticipatorIndex.module.scss'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

function Index () {
  const location = useLocation()

  return (
    <div className={styles.Index}>
      <div className={styles.IndexLeft}>
        <div className={styles.IndexLeftTop}>
          <img className={styles.IndexLeftTopAvatar} />
          <div className={styles.IndexLeftTopName}>Will Edison</div>
        </div>
        <div className={styles.IndexLeftRoutes}>
          <NavLink
            className={`${styles.IndexLeftRouteItem} ${location.pathname.includes('/participatorindex/discovery') ? styles.IndexLeftRouteItemChoose : ''
              }`}
            to="/participatorindex/discovery"
          >
            Discovery
          </NavLink>
          <NavLink
            className={`${styles.IndexLeftRouteItem} ${location.pathname.includes('/participatorindex/schedule') ? styles.IndexLeftRouteItemChoose : ''
              }`}
            to="/participatorindex/schedule"
          >
            Schedule
          </NavLink>
          <NavLink
            className={`${styles.IndexLeftRouteItem} ${location.pathname.includes('/participatorindex/history') ? styles.IndexLeftRouteItemChoose : ''
              }`}
            to="/participatorindex/history"
          >
            History
          </NavLink>
          <NavLink
            className={`${styles.IndexLeftRouteItem} ${location.pathname.includes('/participatorindex/balance') ? styles.IndexLeftRouteItemChoose : ''
              }`}
            to="/participatorindex/balance"
          >
            Balance
          </NavLink>
          <NavLink
            className={`${styles.IndexLeftRouteItem} ${location.pathname.includes('/participatorindex/profileedit') ? styles.IndexLeftRouteItemChoose : ''
              }`}
            to="/participatorindex/profileedit"
          >
            Profile Edit
          </NavLink>
        </div>
      </div>
      <div className={styles.IndexRight}>
        <Outlet />
      </div>
    </div>
  )
}

export default Index
