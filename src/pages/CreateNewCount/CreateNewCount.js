import styles from './CreateNewCount.module.scss'
import { ArrowRightOutlined, LockOutlined, ArrowLeftOutlined, } from '@ant-design/icons'
import { Select, message } from 'antd'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { sendVerifyCode, verifyCodePut, registerApi } from '../../apis/user'
import { cityListApi, configApi } from '../../apis/common'

function CreateNewCount () {


  const emailRegExp = new RegExp("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$")
  const [selectedOption, setSelectedOption] = useState(null)
  const [uareselectedOption, setUareSelectedOption] = useState('Researcher')
  const [PetselectedOption, setPetSelectedOption] = useState(null)
  const [MedicalselectedOption, setMedicalSelectedOption] = useState(null)
  const navigate = useNavigate()
  const [data, setData] = useState({})
  const [companyList, setCompantList] = useState([])
  const [positionList, setPositionList] = useState([])

  const [contryList, setContryList] = useState([])
  const [cityList, setCityList] = useState([])
  const [insituteList, setInsituteList] = useState([])
  const [titleList, setTitleList] = useState([])

  useEffect(() => {
    // 在组件渲染完成后执行的副作用操作
    stateList(0)
  }, [])

  const stateList = async (parentId) => {
    let resp = await cityListApi({ "parentId": parentId })
    if (resp && resp.code == 99) {
      var arr = []
      for (var i = 0; i < resp.data.length; i++) {
        arr.push({ label: resp.data[i].name, value: resp.data[i].id })
      }
      setContryList(arr)
    }
    resp = await configApi()
    if (resp && resp.code == 99) {
      var arr = []
      var arr2 = []
      var arr3 = []
      var arr4 = []
      for (var i = 0; i < resp.data.length; i++) {
        if (resp.data[i].configType == '1')
          arr.push({ label: resp.data[i].title, value: resp.data[i].id })
        else if (resp.data[i].configType == '2') {
          arr2.push({ label: resp.data[i].title, value: resp.data[i].id })
        }

        else if (resp.data[i].configType == '3') {
          arr3.push({ label: resp.data[i].title, value: resp.data[i].id })
        }

        else if (resp.data[i].configType == '4') {
          arr4.push({ label: resp.data[i].title, value: resp.data[i].id })
        }
      }
      setCompantList(arr)
      setPositionList(arr2)
      setInsituteList(arr3)
      setTitleList(arr4)
    }
  }

  const stateChange = async (value) => {
    setData({ ...data, "stateId": value })
    let resp = await cityListApi({ "parentId": value })
    if (resp && resp.code == 99) {
      var arr = []
      for (var i = 0; i < resp.data.length; i++) {
        arr.push({ label: resp.data[i].name, value: resp.data[i].id })
      }
      setCityList(arr)
    }
  }

  const sendCode = async () => {
    if (!emailRegExp.test(data.email)) {
      message.warning('请输入正确的邮箱')
      return
    }
    let resp = await sendVerifyCode(data)
    if (resp.code == 99) {
      message.success('发送成功')
    } else {
      message.warning(resp.msg)
    }

  }

  const handleRegist = async () => {
    let resp = await registerApi(data)
    if (resp && resp.code == 99) {
      message.success('注册成功')
      navigate('/login')
      return
    } else {
      message.warning('注册失败')
    }
  }

  const checkCode = async () => {
    let resp = await verifyCodePut({ "email": data.email, "code": data.code })
    if (resp && resp.code == 99) {
      setData({ ...data, "authId": resp.data })
      message.success('验证成功')
    } else {
      message.warning('验证失败')
    }
  }


  const handleOptionClick = (option) => {
    if (option === selectedOption) {
      // 已经选中，则不执行任何操作
      return
    }
    setSelectedOption(option)
  }
  const handleUareOptionClick = (option) => {
    if (option === uareselectedOption) {
      // 已经选中，则不执行任何操作
      return
    }
    if (option == 'Participator')
      setData({ ...data, "userType": 1 })
    else
      setData({ ...data, "userType": 2 })
    setUareSelectedOption(option)
  }
  const handlePetOptionClick = (option) => {
    if (option === PetselectedOption) {
      // 已经选中，则不执行任何操作
      return
    }
    setPetSelectedOption(option)
  }
  const handleMedicalOptionClick = (option) => {
    if (option === MedicalselectedOption) {
      // 已经选中，则不执行任何操作
      return
    }
    setMedicalSelectedOption(option)
  }
  const [currentStep, setCurrentStep] = useState(1)

  const handleNext = () => {
    if (currentStep == 1) {
      console.log(data)
      if (data.password != data.repassword) {
        message.warning('两次输入密码不一致')
        return
      }
      if (!data.email) {
        message.warning('邮箱不能为空')
        return
      }
      if (!data.authId) {
        message.warning('邮箱未进行校验')
        return
      }
    }
    if (currentStep < 3) {
      setCurrentStep(prevStep => prevStep + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(prevStep => prevStep - 1)
    }
  }

  const renderContent = () => {
    switch (currentStep) {
      case 1:
        return <div className={styles.FirstStep}>
          <div className={styles.FirstStepLeft}>
            <div className={styles.FirstStepLeftTitle}>Create your email account  </div>
            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '0.1302rem' }}>
              <div className={styles.FirstStepLeftItem}>
                <div className={styles.FirstStepLeftItemText}>Email</div>
                <input className={styles.FirstStepLeftItemInput} onChange={(e) => { setData({ ...data, "email": e.target.value }) }}></input>
              </div>
              <div className={styles.FirstStepLeftButton} onClick={sendCode}>Send</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '0.1302rem' }}>
              <div className={styles.FirstStepLeftItem} style={{ width: '1.4583rem' }}>
                <div className={styles.FirstStepLeftItemText}>Code</div>
                <input className={styles.FirstStepLeftItemInput} style={{ width: '1.0416rem' }} onChange={(e) => { setData({ ...data, "code": e.target.value }) }}></input>
              </div>
              <div className={styles.FirstStepLeftButton} onClick={checkCode}>Check</div>
            </div>

            <div className={styles.FirstStepLeftTitle}>Password</div>
            <div>
              <div className={styles.FirstStepLeftItem} style={{ marginTop: '0.1302rem', width: '2.8125rem', paddingTop: '0.015625rem' }}>
                <div className={styles.FirstStepLeftItemText} >Choose a password</div>
                <input placeholder='At least 8 characters' type='password' className={styles.FirstStepLeftItemInput} onChange={(e) => { setData({ ...data, "password": e.target.value }) }}></input>
              </div>
            </div>
            <div>
              <div className={styles.FirstStepLeftItem} style={{ marginTop: '0.1302rem', width: '2.8125rem', paddingTop: '0.015625rem' }}>
                <div className={styles.FirstStepLeftItemText}>Repeat password</div>
                <input type='password' className={styles.FirstStepLeftItemInput} onChange={(e) => { setData({ ...data, "repassword": e.target.value }) }}></input>
              </div>
            </div>
          </div>

          <div className={styles.FirstStepRight}>
            <div className={styles.FirstStepRightTitle}>Personal details  </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', }}>
              <div className={styles.FirstStepRightItem} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <div
                  style={{
                    width: '33%',
                    height: '0.3125rem',
                    lineHeight: '0.3125rem',
                    textAlign: 'center',
                    borderTopLeftRadius: '0.1041rem',
                    borderBottomLeftRadius: '0.1041rem',
                    backgroundColor: selectedOption === 'Ms' ? 'white' : 'initial',
                    border: selectedOption === 'Ms' ? '0.01041rem solid black' : 'none',
                    fontWeight: selectedOption === 'Ms' ? 'bold' : 'normal',
                  }}
                  onClick={() => { setData({ ...data, "gender": '0' }); setSelectedOption('Ms') }}
                >
                  Ms
                </div>
                {selectedOption !== 'Mr' && selectedOption !== 'Ms' && <div className={styles.FirstStepRightItemBorder}></div>}
                <div
                  style={{
                    width: '33%',
                    height: '0.3125rem',
                    lineHeight: '0.3125rem',
                    textAlign: 'center',
                    backgroundColor: selectedOption === 'Mr' ? 'white' : 'initial',
                    border: selectedOption === 'Mr' ? '0.01041rem solid black' : 'none',
                    fontWeight: selectedOption === 'Mr' ? 'bold' : 'normal',
                  }}
                  onClick={() => { setData({ ...data, "gender": '1' }); setSelectedOption('Mr') }}
                >
                  Mr
                </div>
                {selectedOption !== 'Mr' && selectedOption !== 'Other' && <div className={styles.FirstStepRightItemBorder}></div>}
                <div
                  style={{
                    width: '33%',
                    height: '0.3125rem',
                    lineHeight: '0.3125rem',
                    textAlign: 'center',
                    borderTopRightRadius: '0.1041rem',
                    borderBottomRightRadius: '0.1041rem',
                    backgroundColor: selectedOption === 'Other' ? 'white' : 'initial',
                    border: selectedOption === 'Other' ? '0.01041rem solid black' : 'none',
                    fontWeight: selectedOption === 'Other' ? 'bold' : 'normal',
                  }}
                  onClick={() => { setData({ ...data, "gender": '2' }); setSelectedOption('Other') }}
                >
                  Other
                </div>
              </div>
              <div className={styles.FirstStepRightItem} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <input placeholder='MM' className={styles.FirstStepRightItemTimeInput} onChange={(e) => { setData({ ...data, "month": e.target.value }) }}></input>
                <div className={styles.FirstStepRightItemBorder}></div>
                <input placeholder='DD' className={styles.FirstStepRightItemTimeInput} onChange={(e) => { setData({ ...data, "day": e.target.value }) }}></input>
                <div className={styles.FirstStepRightItemBorder}></div>
                <input placeholder='YYYY' className={styles.FirstStepRightItemTimeInput} onChange={(e) => { setData({ ...data, "year": e.target.value }) }}></input>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', }}>
              <div className={styles.FirstStepRightItem}>
                <div className={styles.FirstStepRightItemText}>First name</div>
                <input className={styles.FirstStepRightItemInput} onChange={(e) => { setData({ ...data, "firstName": e.target.value }) }}></input>
              </div>
              <div className={styles.FirstStepRightItem}>
                <div className={styles.FirstStepRightItemText}>Last name</div>
                <input className={styles.FirstStepRightItemInput} onChange={(e) => { setData({ ...data, "lastName": e.target.value }) }}></input>
              </div>
            </div>
            <div className={styles.FirstStepRightTitle}>Area</div>
            <div className={styles.FirstStepRightItem} style={{ width: '2.9167rem', paddingTop: '0.02604rem', height: '0.2864rem' }}>
              <div className={styles.FirstStepRightItemText}>Country/Region</div>
              <Select className={styles.FirstStepRightItemSelect} bordered={false} options={contryList} onChange={stateChange}></Select>
            </div>
            <div className={styles.FirstStepRightItem} style={{ width: '2.9167rem', paddingTop: '0.02604rem', height: '0.2864rem' }}>
              <div className={styles.FirstStepRightItemText}>State</div>
              <Select className={styles.FirstStepRightItemSelect} bordered={false} options={cityList} onChange={(value) => { setData({ ...data, "cityId": value }) }}></Select>
            </div>
          </div>
        </div>
      case 2:
        return <div className={styles.SecondStep}>
          <div className={styles.SecondStepTitle}>You are  </div>
          <div className={styles.SecondStepItem} style={{ marginTop: '0.1041rem', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <div style={{
              width: '50%', height: '100%', lineHeight: '0.3125rem', textAlign: 'center', borderTopLeftRadius: '0.1041rem',
              borderBottomLeftRadius: '0.1041rem', border: uareselectedOption === 'Researcher' ? '0.01041rem solid black' : 'none',
              fontWeight: uareselectedOption === 'Researcher' ? 'bold' : 'normal',
            }} onClick={() => handleUareOptionClick('Researcher')}>Researcher</div>
            {!uareselectedOption && <div className={styles.SecondStepItemBorder}></div>}
            <div style={{
              width: '50%', height: '100%', lineHeight: '0.3125rem', textAlign: 'center', borderTopRightRadius: '0.1041rem',
              borderBottomRightRadius: '0.1041rem', border: uareselectedOption === 'Participator' ? '0.01041rem solid black' : 'none',
              fontWeight: uareselectedOption === 'Participator' ? 'bold' : 'normal',
            }} onClick={() => handleUareOptionClick('Participator')}>Participator</div>
          </div>

          {uareselectedOption == 'Researcher' && <div>
            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '0.1041rem' }}>
              <div className={styles.SecondStepItem}>
                <div className={styles.SecondStepItemTitle}>Industy</div>
                <Select className={styles.SecondStepItemSelect} bordered={false} options={companyList}></Select>
              </div>
              <div className={styles.SecondStepItem} style={{ marginLeft: '0.1041rem' }}>
                <div className={styles.SecondStepItemTitle}>Position</div>
                <Select className={styles.SecondStepItemSelect} bordered={false} options={positionList}></Select>
              </div>
            </div>

            <div>
              <div className={styles.SecondStepSmallTitle}>Pets</div>
              <div className={styles.SecondStepItem} style={{ width: '94%', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <div className={styles.SecondStepItemChoose} style={{
                  borderTopLeftRadius: '0.1041rem',
                  borderBottomLeftRadius: '0.1041rem',
                  border: PetselectedOption === 'Yes' ? '0.01041rem solid black' : 'none',
                  fontWeight: PetselectedOption === 'Yes' ? 'bold' : 'normal',
                }}
                  onClick={() => handlePetOptionClick('Yes')}>Yes</div>
                {PetselectedOption != 'No' && PetselectedOption != 'Yes' && <div className={styles.SecondStepItemBorder}></div>}
                <div className={styles.SecondStepItemChoose} style={{
                  border: PetselectedOption === 'No' ? '0.01041rem solid black' : 'none',
                  fontWeight: PetselectedOption === 'No' ? 'bold' : 'normal',
                }}
                  onClick={() => handlePetOptionClick('No')}>No</div>
                {PetselectedOption != 'No' && <div className={styles.SecondStepItemBorder}></div>}
                <div className={styles.SecondStepItemAdd}>
                  <div className={styles.SecondStepItemAddDemo}>#cat</div>
                  <div className={styles.SecondStepItemAddButton}>+</div>
                </div>
              </div>
            </div>

            <div>
              <div className={styles.SecondStepSmallTitle}>Medical history</div>
              <div className={styles.SecondStepItem} style={{ width: '94%', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <div className={styles.SecondStepItemChoose} style={{
                  borderTopLeftRadius: '0.1041rem',
                  borderBottomLeftRadius: '0.1041rem',
                  border: MedicalselectedOption === 'Yes' ? '0.01041rem solid black' : 'none',
                  fontWeight: MedicalselectedOption === 'Yes' ? 'bold' : 'normal',
                }}
                  onClick={() => handleMedicalOptionClick('Yes')}>Yes</div>
                {MedicalselectedOption != 'No' && MedicalselectedOption != 'Yes' && <div className={styles.SecondStepItemBorder}></div>}
                <div className={styles.SecondStepItemChoose} style={{
                  border: MedicalselectedOption === 'No' ? '0.01041rem solid black' : 'none',
                  fontWeight: MedicalselectedOption === 'No' ? 'bold' : 'normal',
                }}
                  onClick={() => handleMedicalOptionClick('No')}>No</div>
                {MedicalselectedOption != 'No' && <div className={styles.SecondStepItemBorder}></div>}
                <div className={styles.SecondStepItemAdd}>
                  <div className={styles.SecondStepItemAddDemo}>#cat</div>
                  <div className={styles.SecondStepItemAddButton}>+</div>
                </div>
              </div>
            </div>

            <div>
              <div className={styles.SecondStepSmallTitle}>Other related tags</div>
              <div className={styles.SecondStepItem} style={{ width: '94%', display: 'flex', flexDirection: 'row' }}>
                <div className={styles.SecondStepItemAdd} style={{ alignItems: 'center' }}>
                  <div className={styles.SecondStepItemAddDemo}>#cat</div>
                  <div className={styles.SecondStepItemAddButton}>+</div>
                </div>
              </div>
            </div>
          </div>}
          {uareselectedOption == 'Participator' && <div>
            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '0.1041rem' }}>
              <div className={styles.SecondStepItem}>
                <div className={styles.SecondStepItemTitle}>Institute</div>
                <Select className={styles.SecondStepItemSelect} bordered={false} options={insituteList} onChange={(value) => { setData({ ...data, "industryId": value }) }}></Select>
              </div>
              <div className={styles.SecondStepItem} style={{ marginLeft: '0.1041rem' }}>
                <div className={styles.SecondStepItemTitle}>Title</div>
                <Select className={styles.SecondStepItemSelect} bordered={false} options={titleList} onChange={(value) => { setData({ ...data, "titleId": value }) }}></Select>
              </div>
            </div>

            <div>
              <div className={styles.SecondStepSmallTitle}>Research Fields</div>
              <div className={styles.SecondStepItem} style={{ width: '94%', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <div className={styles.SecondStepItemAdd}>
                  <div className={styles.SecondStepItemAddDemo}>#cat</div>
                  <div className={styles.SecondStepItemAddButton}>+</div>
                </div>
              </div>
            </div>

            <div>
              <div className={styles.SecondStepSmallTitle}>Related Links</div>
              <div className={styles.SecondStepItem} style={{ width: '94%', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <div className={styles.SecondStepItemAdd}>
                  <div className={styles.SecondStepItemAddDemo}>#cat</div>
                  <div className={styles.SecondStepItemAddButton}>+</div>
                </div>
              </div>
            </div>

            <div>
              <div className={styles.SecondStepSmallTitle}>Other related tags</div>
              <div className={styles.SecondStepItem} style={{ width: '94%', display: 'flex', flexDirection: 'row' }}>
                <div className={styles.SecondStepItemAdd} style={{ alignItems: 'center' }}>
                  <div className={styles.SecondStepItemAddDemo}>#cat</div>
                  <div className={styles.SecondStepItemAddButton}>+</div>
                </div>
              </div>
            </div>
          </div>}

        </div>
      case 3:
        return <div className={styles.LastStep}>
          <div className={styles.LastStepTitle}>
            <LockOutlined style={{ fontSize: '0.2083rem' }} />
            <div className={styles.LastStepTitleText}>We protect your information  </div>
          </div>
          <div className={styles.LastStepContent}>You own your information. We will only use your information to offer you the products and services you selected. Please note that this product is intended for users in the United States, and when you create a mail.com account, your user information and all data in your mail.com account will be processed on servers located in the United States. Would you like to learn more?</div>
          <div className={styles.LastStepTip}>Please consult our<span style={{ textDecoration: 'underline' }}> privacy policy</span> for additional information.</div>
          <div className={styles.LastStepButton} onClick={handleRegist}>I agree. Create an account now. </div>
        </div>
    }
  }


  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className={styles.CreateNewCountTitleList}>
        <div className={styles.CreateNewCountTitleTop}>START FOR FREE</div>
        <div className={styles.CreateNewCountTitleCenter}>Create new account.</div>
        <div className={styles.CreateNewCountTitleBottom}>
          <div className={styles.CreateNewCountTitleAsk}>Already A Member?  </div>
          <button className={styles.CreateNewCountTitleSign} onClick={() => {
            navigate('/login')
          }}>Sign in<ArrowRightOutlined rotate='-45' /></button>
        </div>
      </div>

      <div>
        {renderContent()}
      </div>

      <div className={styles.CreateNewCountControlStep}>
        <div className={styles.CreateNewCountControlStepButton} onClick={handlePrev} style={{ visibility: currentStep != 1 ? 'visible' : 'hidden' }}><ArrowLeftOutlined className={styles.CreateNewCountControlStepIcon} /></div>
        <div className={`${styles.CreateNewCountControlStepPoint} ${currentStep === 1 ? styles.CreateNewCountControlStepPointSelect : ''}`} style={{ marginLeft: '20px' }}></div>
        <div className={`${styles.CreateNewCountControlStepPoint} ${currentStep === 2 ? styles.CreateNewCountControlStepPointSelect : ''}`}></div>
        <div className={`${styles.CreateNewCountControlStepPoint} ${currentStep === 3 ? styles.CreateNewCountControlStepPointSelect : ''}`} style={{ marginRight: '20px' }}></div>
        <div className={styles.CreateNewCountControlStepButton} onClick={handleNext} style={{ visibility: currentStep != 3 ? 'visible' : 'hidden' }}><ArrowRightOutlined className={styles.CreateNewCountControlStepIcon} /></div>
      </div>
    </div>
  )
}

export default CreateNewCount

