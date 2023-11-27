import styles from './DashBoard.module.scss'
import {
  BellOutlined,
  CarryOutOutlined,
  FileSyncOutlined,
  CalendarOutlined,
  FileDoneOutlined,
  ReadOutlined,
  EnvironmentOutlined,
  FieldTimeOutlined,
  DollarOutlined,
  LeftOutlined,
  FileProtectOutlined,
  FileTextOutlined,
  HistoryOutlined,
  TeamOutlined,
} from '@ant-design/icons'
import { useState, useEffect } from 'react'
import { Modal } from 'antd'
import './DashBoard.module.css'

function DashBoard () {

  useEffect(() => {
    const updateScrollbarStyle = () => {
      const scrollbarStyle = `
        /* WebKit 浏览器（比如 Safari 和 Chrome） */
        ::-webkit-scrollbar {
          width: 10px;
          background-color: #FFFFFF;
        }
  
        ::-webkit-scrollbar-thumb {
          background-color: #e9dbd3;
        }
  
        /* Mozilla Firefox */
        ::-moz-scrollbar {
          width: 10px;
          background-color: #FFFFFF;
        }
  
        ::-moz-scrollbar-thumb {
          background-color: #e9dbd3;
        }
  
        /* Microsoft Edge and Internet Explorer */
        ::-ms-scrollbar {
          width: 10px;
          background-color: #FFFFFF;
        }
  
        ::-ms-scrollbar-thumb {
          background-color: #e9dbd3;
        }
      `

      const styleElement = document.createElement('style')
      styleElement.innerHTML = scrollbarStyle
      document.head.appendChild(styleElement)
    }

    updateScrollbarStyle()

    return () => {
      // 清理更新的滚动条样式
      const styleElement = document.querySelector('style')
      if (styleElement) {
        styleElement.remove()
      }
    }
  }, [])

  const [ShowModal, setShowModal] = useState(false)
  const [ShowModal2, setShowModal2] = useState(false)
  const [ShowDetail, setShowDetail] = useState('back')

  const toggleShowDetail = () => {
    if (ShowDetail === 'back') {
      setShowDetail('detail')
    } else {
      setShowDetail('back')
    }
  }
  return (
    <div className={styles.DashBoard}>
      <div className={styles.DashBoardTop}>
        <div className={styles.DashBoardTopLeft}>
          <div className={styles.DashBoardTopLeftIcon}>
            <BellOutlined />
          </div>
          <div className={styles.DashboardTopList}>
            {[...Array(20)].map((_, index) => (
              <div className={styles.DashboardTopItem} key={index}>
                • “Daily Sugar Consumption” results: 16/50.
              </div>
            ))}
          </div>
        </div>
        <div className={styles.DashBoardTopRight}>
          <div className={styles.DashBoardTopRightIcon}>
            <CarryOutOutlined />
          </div>
          <div className={styles.ScheduleList}>
            <div className={styles.ScheduleListLeft} style={{ marginTop: '0.28125rem' }}>
              {[...Array(10)].map((_, index) => (
                <div className={styles.ScheduleListItem} key={index} onClick={() => setShowModal2(true)}>
                  <div className={styles.ScheduleListItemTitle}>Daily Sugar Consumption</div>
                  <div className={styles.ScheduleListItemLabelList}>
                    <div className={styles.ScheduleListItemLabel}>
                      <CalendarOutlined className={styles.ScheduleListItemLabelIcon} />
                      <div className={styles.ScheduleListItemLabelText}>Dec 7th</div>
                    </div>
                    <div className={styles.ScheduleListItemLabel}>
                      <FileDoneOutlined className={styles.ScheduleListItemLabelIcon} />
                      <div className={styles.ScheduleListItemLabelText}>Questionnaire</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.ScheduleListCenter}>
              {[...Array(20)].map((_, index) => (
                <div className={styles.SchedulePie} key={index}></div>
              ))}
            </div>

            <div className={styles.ScheduleListLeft} style={{ marginLeft: '0px', marginTop: '0.02604rem' }}>
              {[...Array(10)].map((_, index) => (
                <div className={styles.ScheduleListItem} key={index} onClick={() => setShowModal2(true)}>
                  <div className={styles.ScheduleListItemTitle}>Daily Sugar Consumption</div>
                  <div className={styles.ScheduleListItemLabelList}>
                    <div className={styles.ScheduleListItemLabel}>
                      <CalendarOutlined className={styles.ScheduleListItemLabelIcon} />
                      <div className={styles.ScheduleListItemLabelText}>Dec 7th</div>
                    </div>
                    <div className={styles.ScheduleListItemLabel}>
                      <FileDoneOutlined className={styles.ScheduleListItemLabelIcon} />
                      <div className={styles.ScheduleListItemLabelText}>Questionnaire</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.DashBoardBotton}>
        <div className={styles.DashBoardBottonTop}>
          <div className={styles.DashBoardBottonTopIcon}>
            <FileSyncOutlined />
          </div>
          <div className={styles.DashBoardBottonTopAdd}>
            New Research
            <span style={{ marginLeft: '0.046875rem' }}>+</span>
          </div>
        </div>
        <div className={styles.DashBoardBottonList}>
          {[...Array(20)].map((_, index) => (
            <div className={styles.DiscoveryItem} onClick={() => {
              setShowModal(true)
            }} key={index} style={index % 2 === 0 ? { marginRight: '0.0677rem' } : {}}>
              <img className={styles.DiscoveryItemImg} />
              <div className={styles.DiscoveryItemRight}>
                <div className={styles.DiscoveryItemRightTitle}>Daily Sugar Consumption</div>
                <div className={styles.DiscoveryItemRightLabelList}>
                  <div className={styles.DiscoveryItemRightLabelItem}>
                    Usability
                  </div>
                  <div className={styles.DiscoveryItemRightLabelItem}>
                    High pay
                  </div>
                  <div className={styles.DiscoveryItemRightLabelItem}>
                    Consumer Electronic
                  </div>
                </div>
                <div className={styles.DiscoveryItemRightStatus}>
                  In Progress
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {ShowModal && <Modal visible={ShowModal} width={`${2.7083}rem`} className={styles.ShowDetailModal} footer={null} onCancel={() => setShowModal(false)} closeIcon={null} maskClosable centered>
        <div className={styles.ModalTop}>
          <image className={styles.ModalTopImg}></image>
          <div className={styles.ModalTopRight}>
            <div className={styles.ModalTopRightTitle}>Usability Research</div>
            <div className={styles.ModalTopRightItem}>
              <ReadOutlined className={styles.ModalTopRightItemIcon} />
              <div className={styles.ModalTopRightItemText}>Apple Inc</div>
            </div>
            <div className={styles.ModalTopRightItem}>
              <EnvironmentOutlined className={styles.ModalTopRightItemIcon} />
              <div className={styles.ModalTopRightItemText}>Online</div>
            </div>
            <div className={styles.ModalTopRightItem}>
              <FieldTimeOutlined className={styles.ModalTopRightItemIcon} />
              <div className={styles.ModalTopRightItemText}>20-25Minutes</div>
            </div>
            <div className={styles.ModalTopRightItem}>
              <DollarOutlined className={styles.ModalTopRightItemIcon} />
              <div className={styles.ModalTopRightItemText}>$15</div>
            </div>
          </div>
        </div>
        <div className={styles.ModalLabelList}>
          <div className={styles.ModalLabelItem}>Usability</div>
          <div className={styles.ModalLabelItem}>High pay</div>
          <div className={styles.ModalLabelItem}>Consumer Electronic</div>
        </div>
        {
          ShowDetail == 'back' &&
          <div className={styles.ModalDeseription}>
            <div className={styles.ModalDeseriptionTitle}>Deseription</div>
            <div className={styles.ModalDeseriptionContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta in libero convallis fringilla. Aenean pretium nunc in dolor porttitor consectetur. Nam nisl quam, tempor ut mollis tristique, sollicitudin quis leo. Suspendisse sed interdum justo. Vivamus</div>
          </div>
        }
        {
          ShowDetail == 'detail' &&
          <div>
            <div className={styles.ModalDetailItem}>
              <div className={styles.ModalDetailItemTop}>
                <FileDoneOutlined className={styles.ModalDetailItemTopIcon} />
                <div className={styles.ModalDetailItemTopTitle}>Usability research Questionnaire</div>
              </div>
              <div className={styles.ModalDetailItemContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta in libero convallis fringilla. Aenean pretium nunc in dolor porttitor consectetur. Nam nisl quam, tempor ut mollis tristique, sollicitudin quis leo. Suspendisse sed interdum justo. Vivamus</div>
            </div>
            <div className={styles.ModalDetailItem}>
              <div className={styles.ModalDetailItemTop}>
                <FileProtectOutlined className={styles.ModalDetailItemTopIcon} />
                <div className={styles.ModalDetailItemTopTitle}>Usability research Appointment</div>
              </div>
              <div className={styles.ModalDetailItemContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta in libero convallis fringilla. Aenean pretium nunc in dolor porttitor consectetur. Nam nisl quam, tempor ut mollis tristique, sollicitudin quis leo. Suspendisse sed interdum justo. Vivamus</div>
            </div>
            <div className={styles.ModalDetailItem} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', height: '0.46875rem' }}>
              <div className={styles.ModalDetailItemDoc} style={{ marginLeft: '0.15625rem' }}>
                <FileTextOutlined className={styles.ModalDetailItemDocIcon} />
                <div className={styles.ModalDetailItemDocIconText}>Document</div>
              </div>
              <div className={styles.ModalDetailItemDoc}>
                <FileTextOutlined className={styles.ModalDetailItemDocIcon} />
                <div className={styles.ModalDetailItemDocIconText}>Document</div>
              </div>
              <div className={styles.ModalDetailItemDoc}>
                <FileTextOutlined className={styles.ModalDetailItemDocIcon} />
                <div className={styles.ModalDetailItemDocIconText}>Document</div>
              </div>
              <div className={styles.ModalDetailItemDoc} style={{ marginRight: '0.15625rem' }}>
                <FileTextOutlined className={styles.ModalDetailItemDocIcon} />
                <div className={styles.ModalDetailItemDocIconText}>Document</div>
              </div>
            </div>
          </div>
        }
        <div className={styles.ModalButtonList}>
          <button className={styles.ModalButtonLeft} onClick={toggleShowDetail}>
            <span>
              {ShowDetail === 'back' ? <><LeftOutlined />Detail</> : <><LeftOutlined />Back</>}
            </span>
          </button>
          {ShowDetail === 'back' ? <button className={styles.ModalButtonRight}>I'm In</button> : <button style={{ backgroundColor: '#ffffff', width: '0.78125rem' }} className={styles.ModalButtonRight}>In Progress</button>}
        </div>
      </Modal>}
      {
        ShowModal2 && <Modal visible={ShowModal2} width={`${2.7083}rem`} className={styles.ShowDetailModal2} footer={null} onCancel={() => setShowModal2(false)} closeIcon={null} maskClosable centered>
          <div >
            <div className={styles.ShowDetailModalTitle}>
              <CarryOutOutlined className={styles.ShowDetailModalTitleIcon} />
              <div className={styles.ShowDetailModalTitleText}>Daily sugar consumption Interview</div>
            </div>
            <div className={styles.ShowDetailModalLabelList}>
              <div className={styles.ShowDetailModalLabelItem} style={{ width: '0.5729rem' }}>
                <CalendarOutlined className={styles.ShowDetailModalLabelItemIcon} />
                <div className={styles.ShowDetailModalLabelItemText}>Dec 7th</div>
              </div>
              <div className={styles.ShowDetailModalLabelItem}>
                <HistoryOutlined className={styles.ShowDetailModalLabelItemIcon} />
                <div className={styles.ShowDetailModalLabelItemText}>14:00 - 16:00</div>
              </div>
              <div className={styles.ShowDetailModalLabelItem} style={{ width: '0.5729rem' }}>
                <TeamOutlined className={styles.ShowDetailModalLabelItemIcon} />
                <div className={styles.ShowDetailModalLabelItemText}>24 Left</div>
              </div>
            </div>
            <div className={styles.ShowDetailModalInformation}>
              <div className={styles.ShowDetailModalInformationLeft}>
                <EnvironmentOutlined className={styles.ShowDetailModalInformationLeftIcon} />
              </div>
              <div className={styles.ShowDetailModalInformationRight}>
                <div className={styles.ShowDetailModalInformationRightTitle}>Meeting Information </div>
                <div className={styles.ShowDetailModalInformationRightItem}>Link:https://applezoomus/94431732820</div>
                <div className={styles.ShowDetailModalInformationRightItem}>Meeting ID: 982 3991 9249 </div>
                <div className={styles.ShowDetailModalInformationRightItem}>Passcode: 205056</div>
              </div>
            </div>
            <div className={styles.ShowDetailModalDeseription}>
              <div className={styles.ShowDetailModalDeseriptionTitle}>
                Deseription
              </div>
              <div className={styles.ShowDetailModalDeseriptionContent}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta in libero convallis fringilla. Aenean pretium nunc in dolor porttitor consectetur. Nam nisl quam, tempor ut mollis tristique, sollicitudin quis leo. Suspendisse sed interdum justo. Vivamus a augue id lectus egestas interdum id ut dolor. Aenean aliquet interdum quam, ut consectetur ante iaculis eget. Pellentesque quam velit, cursus nec nisl quis,
              </div>
            </div>
            <div className={styles.ShowDetailModalLastStatus}>
              Edit
            </div>
          </div>
        </Modal>
      }
    </div>
  )
}

export default DashBoard