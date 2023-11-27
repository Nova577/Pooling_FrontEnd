import styles from './Schedule.module.scss'
import {
  SearchOutlined,
  CalendarOutlined,
  FileDoneOutlined,
  CarryOutOutlined,
  HistoryOutlined,
  TeamOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons'
import { Modal } from 'antd'
import { useState } from 'react'
function Schedule () {

  const [ShowModal, setShowModal] = useState(false)

  return (
    <div className={styles.Schedule}>
      <div className={styles.ScheduleSearchDiv}>
        <SearchOutlined className={styles.ScheduleSearchDivIcon} />
        <input className={styles.ScheduleSearchDivInput} placeholder='Searching Keyword Here...'></input>
      </div>


      <div className={styles.ScheduleListDiv}>
        <div className={styles.ScheduleList}>
          <div className={styles.ScheduleListLeft}>
            {[...Array(10)].map((_, index) => (
              <div className={styles.ScheduleListItem} key={index} onClick={() => setShowModal(true)}>
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

          <div className={styles.ScheduleListLeft} style={{ marginLeft: '0px', marginTop: '0px' }}>
            {[...Array(10)].map((_, index) => (
              <div className={styles.ScheduleListItem} key={index} onClick={() => setShowModal(true)}>
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

      {
        ShowModal && <Modal visible={ShowModal} width={`${2.7083}rem`} className={styles.ShowDetailModal} footer={null} onCancel={() => setShowModal(false)} closeIcon={null} maskClosable centered>
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
          </div>
        </Modal>
      }
    </div>
  )
}
export default Schedule