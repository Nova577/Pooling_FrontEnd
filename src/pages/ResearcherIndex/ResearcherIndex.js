import styles from './ResearcherIndex.module.scss'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

function Index () {
  const location = useLocation()

  return (
    <div className={styles.Index}>
      <div className={styles.IndexLeft}>
        <div className={styles.IndexLeftTop}>
          <img className={styles.IndexLeftTopAvatar} />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '0.1771rem' }}>
            <div className={styles.IndexLeftTopName}>Will Edison</div>
            <div className={styles.IndexLeftTopInformation}>PhD, MD, Biomed @
              University of Melbourne</div>
          </div>
        </div>
        <div className={styles.IndexLeftRoutes}>
          <NavLink
            className={`${styles.IndexLeftRouteItem} ${location.pathname.includes('/researcherindex/dashboard') ? styles.IndexLeftRouteItemChoose : ''
              }`}
            to="/researcherindex/dashboard"
          >
            DashBoard
          </NavLink>
          <NavLink
            className={`${styles.IndexLeftRouteItem} ${location.pathname.includes('/researcherindex/feepayment') ? styles.IndexLeftRouteItemChoose : ''
              }`}
            to="/researcherindex/feepayment"
          >
            Fee & Payment
          </NavLink>
          <NavLink
            className={`${styles.IndexLeftRouteItem} ${location.pathname.includes('/researcherindex/profileedit') ? styles.IndexLeftRouteItemChoose : ''
              }`}
            to="/researcherindex/profileedit"
          >
            ProfileEdit
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
