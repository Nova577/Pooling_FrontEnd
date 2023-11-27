import React, { useState } from 'react'
import styles from './Login.module.scss'
import { ArrowRightOutlined } from '@ant-design/icons'
import { Link, useNavigate } from 'react-router-dom'
import { LoginApi, userGetApi } from "../../apis/user"
import { message } from 'antd'
import cookie from 'react-cookies'


function Login () {

  const [data, setData] = useState({
    loginName: "",
    password: ''
  })

  const [disBtn, setDisBtn] = useState(false)

  const Navigate = useNavigate()

  const handleLogin = async () => {
    if (disBtn) {
      return
    }
    setDisBtn(true)
    if (!data || data.length == 0) {
      message.warning('请输入账号密码')
      return
    }
    if (data.loginName.length <= 0) {
      message.warning('请输入账号')
      return
    }
    if (data.password.length < 8) {
      message.warning('请输入正确密码')
      return
    }


    let resp = await LoginApi(data)
    setDisBtn(false)
    if (resp && resp.code == 99) {
      cookie.save("token", resp.data)
      message.success('登录成功')
      resp = await userGetApi()
      if (resp && resp.code == 99) {
        if (resp.data.userType == '1') {
          Navigate("/researcherindex/dashboard")
        } else {
          Navigate("/participatorindex/discovery")
        }
      }
      return
    } else {
      message.warning(resp.msg)
    }
  }



  return (
    <div>
      <div className={styles.LoginTitleList}>
        <div className={styles.LoginTitleTop}>SEE WHAT YOU CARE</div>
        <div className={styles.LoginTitleCenter}>Sign in to Pooling</div>
        <div className={styles.LoginTitleBottom}>
          <div className={styles.LoginTitleAsk}>Don’t have an Account?</div>
          <button className={styles.LoginTitleSign} onClick={() => {
            Navigate("/createnewcount")
          }}>Sign up<ArrowRightOutlined rotate='-45' /></button>
        </div>
      </div>
      <div className={styles.LoginInputList}>
        <div className={styles.LoginInputItem}>
          <div className={styles.LoginInputItemTitle}>Email Or Account Number  </div>
          <div className={styles.LoginInputItemInputDiv}>
            <input className={styles.LoginInputItemInput} onChange={(e) => { setData({ ...data, loginName: e.target.value }) }}></input>
          </div>
        </div>
        <div className={styles.LoginInputItem}>
          <div className={styles.LoginInputItemTitle}>Password  </div>
          <div className={styles.LoginInputItemInputDiv}>
            <input className={styles.LoginInputItemInput} type='password' onChange={(e) => { setData({ ...data, password: e.target.value }) }}></input>
          </div>
        </div>
        <div className={styles.LoginInputButton}>
          <div className={styles.LoginInputSignIn} disabled={data.loginName.length <= 0 && data.password.length < 8} onClick={handleLogin}>Sign in</div>
          {/* <div className={styles.LoginInputSignIn} onClick={() => {
            Navigate("/participatorindex/discovery")
          }}>Sign in</div> */}
          <div className={styles.LoginInputForget}>
            <Link to="/resetpassword" style={{ color: "#696562" }}>
              Forget Password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login