import styles from './ResetPassword.module.scss'

function ResetPassword () {
  return (
    <div>
      <div className={styles.ResetPassword}>
        <div className={styles.ResetPasswordTitle}>Reset your password</div>
        <div className={styles.ResetPasswordEmail}>
          <div className={styles.ResetPasswordEmailLeft}>
            <div className={styles.ResetPasswordEmailTitle}>Email</div>
            <input className={styles.ResetPasswordEmailInput}></input>
          </div>
          <button className={styles.ResetPasswordEmailButton}>Send</button>
        </div>
        <div className={`${styles.ResetPasswordEmail} ${styles.marginTop20}`}>
          <div className={styles.ResetPasswordEmailLeft} style={{ width: '1.875rem' }}>
            <div className={styles.ResetPasswordEmailTitle}>Code</div>
            <input className={styles.ResetPasswordEmailInput} style={{ width: '1.3541rem' }}></input>
          </div>
          <button className={styles.ResetPasswordEmailButton}>Check</button>
        </div>
        <div className={styles.ResetPasswordEnterItem}>
          <div className={styles.ResetPasswordEnterItemTitle}>Entry password</div>
          <div className={styles.ResetPasswordEnterItemInputDiv}>
            <input className={styles.ResetPasswordEnterItemInput} type='password'></input>
          </div>
        </div>
        <div className={styles.ResetPasswordEnterItem}>
          <div className={styles.ResetPasswordEnterItemTitle}>Repeat password</div>
          <div className={styles.ResetPasswordEnterItemInputDiv}>
            <input className={styles.ResetPasswordEnterItemInput} type='password'></input>
          </div>
        </div>
        <div className={styles.ResetPasswordButtom}>Reset</div>
      </div>
    </div>
  )
}

export default ResetPassword